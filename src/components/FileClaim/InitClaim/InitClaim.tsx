import React, { useState } from "react";
import { UserData } from "./UserData/UserData";
import { ClaimForm } from "./ClaimForm/ClaimForm";
import { ModalNotification } from "./ModalNotification/ModalNotification";

export const InitClaim = () => {
  const [claimMode, setClaimMode] = useState<boolean>(false);
  return (
    <div>
      {claimMode && <ModalNotification claimMode={claimMode} setClaimMode={setClaimMode} />}
      <h2>File a Claim</h2>
      <UserData />
      <ClaimForm setClaimMode={setClaimMode} />
    </div>
  );
};
