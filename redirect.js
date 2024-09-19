const { AuthProvider } = window.arcana.auth;

window.onload = async () => {
  const auth = new AuthProvider(
    "xar_dev_92ecc87db08e4c13b1fcd9b37ca9bf54fa874355"
  );
  await auth.init();
  const u = new URL(window.location.href);
  if (u.hash) {
    const p = new URLSearchParams(u.hash.substring(1));
    const t = p.get("tgAuthResult");
    if (t) {
      cleanURL();
      await auth.loginWithBearer("telegram", { token: t });
    }
  }
};

function cleanURL() {
  const cleanUrl = window.location.origin + window.location.pathname;
  window.history.replaceState(null, "", cleanUrl);
}

