// Read-only synthetic hosts for browser-tool acceptance; never serves repository files.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),http=require('node:http');
const root=path.resolve(__dirname,'..');
const codexSource=fs.readFileSync(path.join(root,'tests/theme-browser.cjs'),'utf8').match(/const fixture = (`[\s\S]+?`);\r?\n\r?\nasync function main/);
const dshSource=fs.readFileSync(path.join(root,'dsh/tests/client.cjs'),'utf8').match(/const fixture = (`[\s\S]+?`);\r?\nconst checks/);
const codex=vm.runInNewContext(codexSource[1]).replace('</body>','<script>fixture.setMode("dark");fixture.setView("chat");</script><script src="/codex.js"></script></body>');
const dsh=vm.runInNewContext(dshSource[1]).replace('</body>','<script>window.__ModuleLoader__={load(e){window.theme=e.factory()}};</script><script src="/dsh.js"></script><script>theme.apply({effect(fn){window.cleanup=fn()}})</script></body>');
const server=http.createServer((req,res)=>{
  const key=new URL(req.url,'http://127.0.0.1').pathname;
  if(key==='/codex'||key==='/dsh'){
    const platform=key.slice(1);
    const toolbar=`<div style="position:fixed;top:2px;left:50%;transform:translateX(-50%);z-index:2147483646;display:flex;gap:4px"><button type="button" id="preview-mode">切换明暗</button></div><script>
      window.__previewErrors=[];addEventListener('error',e=>__previewErrors.push(e.message));addEventListener('unhandledrejection',e=>__previewErrors.push(String(e.reason)));
      document.getElementById('preview-mode').onclick=()=>{${platform==='codex'?"fixture.setMode(document.documentElement.dataset.theme==='dark'?'light':'dark')":"document.body.toggleAttribute('data-ds-dark-theme')"}};
    </script>`;
    res.setHeader('Content-Type','text/html;charset=utf-8');res.setHeader('Cache-Control','no-store');res.end((platform==='codex'?codex:dsh).replace('</body>',toolbar+'</body>'));
  }
  else if(key==='/codex.js'||key==='/dsh.js'){res.setHeader('Content-Type','application/javascript');fs.createReadStream(path.join(root,key==='/codex.js'?'dist/theme/payload.js':'dsh/lib/client.js')).pipe(res);}
  else if(key==='/favicon.ico'){res.statusCode=204;res.end();}
  else{res.statusCode=404;res.end();}
});server.listen(0,'127.0.0.1',()=>console.log(JSON.stringify({codex:`http://127.0.0.1:${server.address().port}/codex`,dsh:`http://127.0.0.1:${server.address().port}/dsh`})));
