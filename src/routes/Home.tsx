import { useNavigate } from "react-router-dom";
import useAppStore from "../store";
import { useAuthState } from "react-firebase-hooks/auth"
import { IconLoading } from "../icons";

export default function PageHome() {
  const navigate = useNavigate()
  const { firebaseAuth } = useAppStore()
  const [user, loading] = useAuthState(firebaseAuth)

  if (loading) {
    return <h1 className="text-xl p-4 w-screen h-screen grid place-content-center grid-flow-col items-center gap-2"><IconLoading className="animate-spin" />Logging In</h1>
  }

  if (!user) {
    navigate("/login")
  }

  return <h1 className="text-2xl p-4">Logged In as {firebaseAuth.currentUser?.displayName ?? "Unknown Name"}</h1>
}
