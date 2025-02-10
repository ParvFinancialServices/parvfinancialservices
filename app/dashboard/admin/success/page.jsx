'use client'

import { useUserState } from "../../store";

export default function Page() {
  const userState = useUserState();
  return (
    <div>
      <h1>Success</h1>
      <p>{userState.loanNumber}</p>
    </div>
  );
}
