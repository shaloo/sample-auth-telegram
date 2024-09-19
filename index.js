window.onload = () => {
  const btn = document.getElementById("telegram-login");
  btn.onclick = () => {
    const url = new URL("/auth", "https://oauth.telegram.org");
    url.searchParams.append("bot_id", "7097916610");
    url.searchParams.append("scope", "profile");
    url.searchParams.append("origin", "https://zcnk5z-5000.csb.app");
    url.searchParams.append("return_to", "https://zcnk5z-5000.csb.app/redirect");
    setTimeout(() => (window.location.href = url.toString()), 50);
  };
};
