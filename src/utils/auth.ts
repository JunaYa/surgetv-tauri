interface TokenInfo {
  token: string | null
}

const KEY = 'token'

const curToken: TokenInfo = { token: null }

export function getToken(): TokenInfo | null {
  if (curToken == null) {
    return null
  }
  return { ...curToken }
}

export function isLogin(): boolean {
  return !!getToken()?.token
}

export function getCachedToken(): string | null {
  return localStorage.getItem(KEY)
}

function setCachedToken(token: string | null) {
  if (token == null) {
    localStorage.removeItem(KEY)
  } else {
    localStorage.setItem(KEY, token)
  }
}

export function setToken(token: string | null) {
  curToken.token = token
  setCachedToken(token)
}

export function removeToken() {
  setCachedToken(null)
}
