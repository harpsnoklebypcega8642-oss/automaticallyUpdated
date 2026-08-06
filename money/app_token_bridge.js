(function () {
  const storageKey = "my_token";
  const tokenEventName = "xhj-app-token-received";

  function normalizeToken(token) {
    if (typeof token !== "string") {
      return "";
    }

    return token.trim();
  }

  window.receiveTokenFromApp = function (token) {
    const normalizedToken = normalizeToken(token);
    if (!normalizedToken) {
      return false;
    }

    try {
      window.localStorage.setItem(storageKey, normalizedToken);
      window.dispatchEvent(new CustomEvent(tokenEventName));
      return true;
    } catch (error) {
      console.warn("Unable to receive App token", error);
      return false;
    }
  };
})();
