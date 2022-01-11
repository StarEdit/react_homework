import React from 'react';
import './App.css';
import './assets/css/style.css';
import MyForm from './components/MyForm';

function App() {
    return (
        <>
        <div className="App">
            
        </div>

        <div className="container">
                <h1>Liên hệ đặt tiệc</h1>

                <p>Kế thừa tinh hoa Golden Gate Restaurant Group, chúng tôi cung cấp giải pháp phục vụ
                tiệc tại gia đạt chuẩn chất lượng nhà hàng.
                </p>

                <MyForm />
            </div>
        </>
        
    );
}

export default App;
