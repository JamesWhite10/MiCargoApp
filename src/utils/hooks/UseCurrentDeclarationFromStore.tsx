import { useSelector } from "react-redux";
import { AppStateType } from "../../app/store";

export function UseCurrentDeclarationFromStore() {
  const number = useSelector<AppStateType, string | undefined>(
    (state) => state.cancel.currentDeclaration?.number
  );
  const amount = useSelector<AppStateType, number | undefined>(
    (state) => state.cancel.currentDeclaration?.amount
  );
  const distance = useSelector<AppStateType, number | undefined>(
    (state) => state.cancel.currentDeclaration?.distance
  );
  const insuredCargoName = useSelector<AppStateType, string | undefined>(
    (state) => state.cancel.currentDeclaration?.insuredCargoName
  );
  const cargoValue = useSelector<AppStateType, number | undefined>(
    (state) => state.cancel.currentDeclaration?.cargoValue
  );
  const deductible = useSelector<AppStateType, number | undefined>(
    (state) => state.cancel.currentDeclaration?.deductible
  );
  const fullValue = useSelector<AppStateType, number | undefined>(
    (state) => state.cancel.currentDeclaration?.fullValue
  );
  const origin = useSelector<AppStateType, string | undefined>(
    (state) => state.cancel.currentDeclaration?.origin
  );
  const destination = useSelector<AppStateType, string | undefined>(
    (state) => state.cancel.currentDeclaration?.destination
  );
  const pickUp = useSelector<AppStateType, Date | undefined>(
    (state) => state.cancel.currentDeclaration?.pickUp
  );
  const delivery = useSelector<AppStateType, Date | undefined>(
    (state) => state.cancel.currentDeclaration?.delivery
  );
  const bol = useSelector<AppStateType, string | undefined>(
    (state) => state.cancel.currentDeclaration?.bol
  );
  const motorCarrierName = useSelector<AppStateType, string | undefined>(
    (state) => state.cancel.currentDeclaration?.motorCarrierName
  );
  const dot = useSelector<AppStateType, string | undefined>(
    (state) => state.cancel.currentDeclaration?.dot
  );
  return {
    number,
    amount,
    distance,
    insuredCargoName,
    cargoValue,
    deductible,
    fullValue,
    origin,
    destination,
    pickUp,
    delivery,
    bol,
    motorCarrierName,
    dot,
  };
}
