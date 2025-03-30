import React, { useRef,useState } from "react";

// 6603052421020 วศีล บุตรพรหม ECT SEC 1
const Karaokae = () => {
  const [total, setTotal] = useState(0);
  const card1 = useRef();
  const card2 = useRef();
  const hours1 = useRef();
  const hours2 = useRef();

  const calculateTotal = () => {
    let calculatedTotal = 0;
    if (card1.current.checked) {
      if (hours1.current.value === "") {
        alert("กรุณากรอกจำนวนชั่วโมง");
        return;
      }
      calculatedTotal = hours1.current.value * 120;
    } else if (card2.current.checked) {
      if (hours2.current.value === "") {
        alert("กรุณากรอกจำนวนชั่วโมง");
        return;
      }
      calculatedTotal = hours2.current.value * 80;
    }

    setTotal(calculatedTotal);
  };

  return (
    <div style={{ marginTop: "10px", marginLeft: "10px" }}>
      <table width="400" border="2" bordercolor="#000000">
        <tbody>
          <tr>
            <td colSpan="2" id="karaokae">
              ร้านคาราโอเกะ
            </td>
          </tr>
          <tr>
            <td>
              <br />
              &nbsp;&nbsp;
              <input type="radio" name="c1" ref={card1} />
              &nbsp; ไม่มีบัตรนักศึกษา <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ชั่วโมงละ 120 บาท จำนวน
              &nbsp;
              <input type="text" size="2" ref={hours1} /> ชั่วโมง <br />
              &nbsp;&nbsp;
              <input type="radio" name="c1" ref={card2} />
              &nbsp; มีบัตรนักศึกษา <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ชั่วโมงละ 80 บาท จำนวน
              &nbsp;
              <input type="text" size="2" ref={hours2} /> ชั่วโมง{" "}
              <br />
              <br />
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <button onClick={calculateTotal}>คิดเงิน</button>
      <br />
      รวมเป็นเงินทั้งสิ้น = &nbsp;
      <input type="text" value={total} id="txtTotal" readOnly /> บาท
    </div>
  );
};

export default Karaokae;
