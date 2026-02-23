import { render, screen } from "@testing-library/react"
import LoginPage from "./page"

// 🔥 Mock next/navigation
jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
    refresh: jest.fn(),
  }),
}))

// 🔥 Mock firebase
jest.mock("@/lib/firebase", () => ({
  auth: {},
}))

jest.mock("firebase/auth", () => ({
  signInWithPopup: jest.fn(),
  GoogleAuthProvider: jest.fn(),
  signInWithEmailAndPassword: jest.fn(),
}))

// 🔥 Mock sonner
jest.mock("sonner", () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
  },
}))

describe("Login Page", () => {
  it("renders email input", () => {
    render(<LoginPage />)
    const emailInput = screen.getByPlaceholderText(/email address/i)
    expect(emailInput).toBeInTheDocument()
  })

  it("renders password input", () => {
    render(<LoginPage />)
    const passwordInput = screen.getByPlaceholderText(/password/i)
    expect(passwordInput).toBeInTheDocument()
  })

  it("renders google login button", () => {
    render(<LoginPage />)
    const googleButton = screen.getByRole("button", {
      name: /continue with google/i,
    })
    expect(googleButton).toBeInTheDocument()
  })

  it("renders email login button", () => {
    render(<LoginPage />)
    const loginButton = screen.getByRole("button", {
      name: /login with email/i,
    })
    expect(loginButton).toBeInTheDocument()
  })
})