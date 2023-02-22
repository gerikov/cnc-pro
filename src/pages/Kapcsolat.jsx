import "./Kapcsolat.scss";
import ContactForm from "../components/ContactForm";
import * as yup from "yup";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";

const Kapcsolat = () => {
  // const fromSchema = yup.object().shape({
  //   name: yup.string().required("required"),
  //   email: yup.string().required("required"),
  //   phone: yup.string().required("required"),
  // });

  return (
    <div className="kapcsolat">
      <div className="hero"></div>
      <div className="container">
        <div className="left">
          <ContactForm />
        </div>
        <div className="right">
          <div className="unit">
            <div className="icon">
              <HomeOutlinedIcon sx={{ fontSize: "40px" }} />
            </div>
            <div>
              <div className="label">Székhely</div>
              <div className="data">2112 Veresegyház, Aranyforint u. 19. </div>
            </div>
          </div>
          <div className="unit">
            <div className="icon">
              <AccountBalanceOutlinedIcon sx={{ fontSize: "40px" }} />
            </div>
            <div>
              <div className="label">Adószám</div>
              <div className="data">13732950-2-13 / HU13732950 </div>
            </div>
          </div>
          <div className="unit">
            <div className="icon">
              <AlternateEmailOutlinedIcon sx={{ fontSize: "40px" }} />
            </div>
            <div>
              <div className="label">Email</div>
              <div className="data">cncprokft@gmail.com</div>
            </div>
          </div>
          <div className="unit">
            <div className="icon">
              <LocalPhoneOutlinedIcon sx={{ fontSize: "40px" }} />
            </div>
            <div>
              <div className="label">Telefon</div>
              <div className="data">+36 30 297 9420</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kapcsolat;
