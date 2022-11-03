import axios from 'axios';
import { toast } from "react-toastify";

// *********** Send email
export const SendEmail = async ({
    name,
    email,
    phone,
    subject,
    message,
    setSend,
  }) => {
    try {
      const datas = { name, email, phone, subject, message };
      let res = await axios.post(`http://localhost:8800/send`, datas);
      if (res) {
        setSend(res.data);
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };