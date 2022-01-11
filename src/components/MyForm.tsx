import React, {useState} from "react";
import MyInput from "./MyInput";

interface FormData {
    [key:string]:string;
}

const MyForm = () => {
    const [inputValues, setInputValues] = useState<FormData>();

    const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget;

        setInputValues(prevState => ({ ...prevState, [name]: value }));
    };

    const handleFormSubmit = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()

        const data = {
          name: inputValues?.name,
          quantity: inputValues?.quantity,
          phone: inputValues?.phone,
          date: inputValues?.date,
          address: inputValues?.address,
          typeEvent: inputValues?.typeEvent
        }

        alert(`
            Họ và tên: ${data.name}
            Số lượng khách: ${data.quantity} 
            Số điện thoại: ${data.phone} 
            Ngày tổ chức: ${data.date} 
            Địa chỉ: ${data.address} 
            Loại sự kiện: ${data.typeEvent}
        `);
    };

    return(
        <form className="form">
            <MyInput 
                name={"name"} 
                label={"Họ và tên"} 
                type="text" 
                value={inputValues?.name} 
                onChange={handleInputChange}
            />

            <MyInput 
                name={"quantity"} 
                label={"Số lượng khách"} 
                type="text" 
                value={inputValues?.quantity} 
                onChange={handleInputChange}
            />

            <MyInput 
                name={"phone"} 
                label={"Số điện thoại"} 
                type="text" 
                value={inputValues?.phone} 
                onChange={handleInputChange}
            />

            <MyInput 
                name={"date"} 
                label={"Ngày tổ chức sự kiện"} 
                type="date" 
                value={inputValues?.date} 
                onChange={handleInputChange}
            />

            <MyInput 
                name={"address"} 
                label={"Địa chỉ"} 
                type="text" 
                value={inputValues?.address} 
                onChange={handleInputChange}
            />

            <MyInput 
                name={"typeEvent"} 
                label={"Loại sự kiện"} 
                type="text" 
                value={inputValues?.typeEvent} 
                onChange={handleInputChange}
            />

            <div className="rule-wrap">
                <input type="checkbox" name="rule" id="rule"/>
                <label htmlFor="rule">Nhận tư vấn chọn gói sự kiện (MC, ánh sáng, sân khấu,...)</label>
            </div>

            <div className="btn-wrap">
                <button
                    onClick={handleFormSubmit}
                >
                    Gửi thông tin ngay
                </button>
            </div>
        </form>
    );
};

export default MyForm;
