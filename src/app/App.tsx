import React, { useEffect } from "react";
import "./App.css";
import Footer from "../components/Footer/Footer";
import { Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "./store";
import { CircularProgress, LinearProgress } from "@material-ui/core";
import { ErrorSnackbar } from "../components/ErrorSnackbar/ErrorSnackbar";
import Home from "../components/Header/NavBar/Home/Home";
import AboutUs from "../components/Header/NavBar/AboutUs/AboutUs";
import Support from "../components/Header/NavBar/Support/Support";
import Report from "../components/Header/NavBar/Report/Report";
import CancelPurchase from "../components/Header/NavBar/CancelPurchase/CancelPurchase";
import HeaderNav from "../components/Header/NavBar/HeaderNav";
import Commodity from "../components/Footer/Commodity/Commodity";
import ApprovedCom from "../components/Footer/Commodity/ApprovedCom";
import ExcludedCom from "../components/Footer/Commodity/ExcludedCom";
import { RequestStatusType } from "../reducers/app/app-types";
import { initializeAppTC } from "../reducers/app/app-reducer";
import { SuccessSnackbar } from "../components/SuccessSnackbar/SuccessSnackbar";
import ContactUs from "../components/Footer/ContactUs/ContactUs";
import Faq from "../components/Header/NavBar/Support/FAQ";
import CancelPurchaseFinally from "../components/PurchaseHistory/CancelPurchaseFinally/CancelPurchaseFinally";
import { FileClaim } from "../components/FileClaim/FileClaim";
import MiKargoQuote from "../components/Quote/MiKargoQuote";
import ShippingInformation from "../components/ShippingInformation/ShippingInformation";
import { withSuspense } from "../components/shared/withSuspense";
const ProfileContainer = React.lazy(() => import("../components/Profile/ProfileContainer"));
import PurchaseHistory from "../components/PurchaseHistory/PurchaseHistoryMain";

export const PATH = {
  PROFILE: "/profile",
  HOME: "/",
  ABOUT_US: "/about_us",
  SUPPORT_FAQ: "/support_FAQ",
  REPORT_A_CLAIM: "/report_a_claim",
  PURCHASE_HISTORY: "/history",
  CANCEL_A_PURCHASE: "/cancel",
  CANCEL_A_PURCHASE_FINALLY: "/history/cancel",
  COMMODITY_SCHEDULE: "/commodity_schedule",
  APPROVED_COMMODITY: "/approved_commodity",
  EXCLUDED_COMMODITY: "/excluded_commodity",
  CONTACT_US: "/contact_us",
  FAQ: "/FAQ",
  FILE_A_CLAIM: "/file_a_claim",
  YOUR_QUOTE: "/your_quote",
  SHIPPING_INFORMATION: "/shipping_information",
};

const App: React.FC = () => {
  const status = useSelector<AppStateType, RequestStatusType>((state) => state.app.status);
  const isInitialized = useSelector<AppStateType, boolean>((state) => state.app.isInitialized);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeAppTC());
  }, [dispatch]);

  if (!isInitialized) {
    return (
      <div>
        <div
          style={{
            position: "fixed",
            top: "30%",
            textAlign: "center",
            width: "100%",
          }}
        >
          <h1 style={{ color: "blue" }}>MiKargo</h1>
        </div>
        <div
          style={{
            position: "fixed",
            top: "40%",
            textAlign: "center",
            width: "100%",
          }}
        >
          <CircularProgress />
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <ErrorSnackbar />
      <SuccessSnackbar />
      <HeaderNav />
      {status === "loading" && <LinearProgress />}
      <div className="app-wrapper-content">
        <Switch>
          <Route path={PATH.PROFILE} render={withSuspense(ProfileContainer)} />
          <Route exact path={PATH.HOME} render={() => <Home />} />
          <Route path={PATH.ABOUT_US} render={() => <AboutUs />} />
          <Route path={PATH.SUPPORT_FAQ} render={() => <Support />} />
          <Route path={PATH.REPORT_A_CLAIM} render={() => <Report />} />
          <Route path={PATH.CANCEL_A_PURCHASE} render={() => <CancelPurchase />} />
          <Route exact path={PATH.PURCHASE_HISTORY} render={() => <PurchaseHistory />} />
          <Route
            exact
            path={PATH.CANCEL_A_PURCHASE_FINALLY}
            render={() => <CancelPurchaseFinally />}
          />
          <Route path={PATH.COMMODITY_SCHEDULE} render={() => <Commodity />} />
          <Route path={PATH.CONTACT_US} render={() => <ContactUs />} />
          <Route path={PATH.APPROVED_COMMODITY} render={() => <ApprovedCom />} />
          <Route path={PATH.EXCLUDED_COMMODITY} render={() => <ExcludedCom />} />
          <Route path={PATH.FAQ} render={() => <Faq />} />
          <Route path={PATH.FILE_A_CLAIM} render={() => <FileClaim />} />
          <Route path={PATH.YOUR_QUOTE} render={() => <MiKargoQuote />} />
          <Route path={PATH.SHIPPING_INFORMATION} render={() => <ShippingInformation />} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default App;
