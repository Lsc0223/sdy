export default {
  async fetch(request, env) {
    const _url = new URL(request.url);
    _url.hostname = _url.pathname.startsWith("/gh/")
      ? "alist.906331.xyz"
      : "disabled-perrine-liu0223liu-c0620a9b.koyeb.app";
    const req = new Request(_url, request);
    return fetch(req);
  },
};
