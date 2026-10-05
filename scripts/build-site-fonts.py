import sys,json
from pathlib import Path
from fontTools import subset
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont
root=Path(__file__).resolve().parents[1]
source=root/'public/fonts'
if len(sys.argv)!=2:raise SystemExit('Usage: python scripts/build-site-fonts.py DIRECTORY_WITH_SOURCE_TTF_FILES')
inputs=Path(sys.argv[1]);target=source
import hashlib
manifest=json.loads((root/'docs/font-assets.json').read_text(encoding='utf-8'))
for entry in manifest['sources']:
    assert hashlib.sha256((inputs/entry['file']).read_bytes()).hexdigest()==entry['sha256'], 'Source hash mismatch: '+entry['file']
results=[]
for family,folder,weights in [('readex','readexpro',[160,400,600,700]),('lemonada','lemonada',[300,400,600,700])]:
    originals=[TTFont(source/(family+'-'+script+'.woff2')) for script in ['arabic','latin']]
    full=TTFont(inputs/(folder+'.ttf'))
    if family=='readex':
        full=instantiateVariableFont(full,{'HEXP':0},inplace=True)
        from io import BytesIO
        stream=BytesIO();full.save(stream);stream.seek(0);full=TTFont(stream)
    wanted=set().union(*(font.getBestCmap().keys() for font in originals));assert wanted<=full.getBestCmap().keys()
    options=subset.Options();options.layout_features=['*'];options.name_IDs=['*'];options.name_languages=['*']
    worker=subset.Subsetter(options=options);worker.populate(unicodes=wanted);worker.subset(full);full.flavor='woff2'
    file=target/(family+'-site.woff2');full.save(file)
    combined=TTFont(file);assert combined.getBestCmap().keys()==wanted
    checked=0
    for weight in weights:
        actual=instantiateVariableFont(combined,{'wght':weight},inplace=False)
        for old in originals:
            expected=instantiateVariableFont(old,{'wght':weight},inplace=False)
            for code,oldglyph in expected.getBestCmap().items():
                newglyph=actual.getBestCmap()[code]
                assert expected['hmtx'][oldglyph]==actual['hmtx'][newglyph],(family,weight,hex(code),'metrics')
                # Compare instantiated outlines independently of glyph names and point indexing.
                from fontTools.pens.recordingPen import DecomposingRecordingPen
                pen1=DecomposingRecordingPen(expected.getGlyphSet());pen2=DecomposingRecordingPen(actual.getGlyphSet())
                expected.getGlyphSet()[oldglyph].draw(pen1);actual.getGlyphSet()[newglyph].draw(pen2)
                def matching(a,b):
                    if isinstance(a,(int,float)) and isinstance(b,(int,float)):return abs(a-b)<=1
                    if isinstance(a,(tuple,list)) and isinstance(b,(tuple,list)):return len(a)==len(b) and all(matching(x,y) for x,y in zip(a,b))
                    return a==b
                assert matching(pen1.value,pen2.value),(family,weight,hex(code),'outline')
                checked+=1
    results.append({'font':file.name,'bytes':file.stat().st_size,'oldBytes':sum((source/(family+'-'+s+'.woff2')).stat().st_size for s in ['arabic','latin']),'glyphs':len(wanted),'weights':weights,'outlineAndMetricsChecks':checked,'coverage':'complete original union','variableWeight':'retained'})
print(json.dumps(results,indent=2))
