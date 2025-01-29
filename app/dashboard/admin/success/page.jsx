'use client'

import { useAdminState } from "../../store";

export default function Page() {
  const adminState = useAdminState();
  return (
    <div>
      <h1>Success</h1>
      <p>{adminState.loanNumber}</p>
    </div>
  );
}
