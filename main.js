/**
 * BAI 1:
 */
// INPUT
var testScoreTotal = 0;
var testScoreStandardized = 0;
var testScoreSubjectA = 0;
var testScoreSubjectB = 0;
var testScoreSubjectC = 0;
var scorePlusByRegion = 0;
var scorePlusByObject = 0;
//----------------------ELEMENT--------------
const TEST_SCORE_STANDARDIZED_INPUT = document.getElementById("inputScoreStandardized");
const TEST_SCORE_SUBJECT_A_INPUT = document.getElementById("inputScoreSubjectA");
const TEST_SCORE_SUBJECT_B_INPUT = document.getElementById("inputScoreSubjectB");
const TEST_SCORE_SUBJECT_C_INPUT = document.getElementById("inputScoreSubjectC");
const TEST_SCORE_BY_REGION = document.getElementById("inputScoreByRegion");
const TEST_SCORE_BY_OBJECT = document.getElementById("inputScoreByObject");
const TEST_SCORE_ANSWER_BUTTON = document.getElementById("btnScore");
//----------------------END ELEMENT-----------
// END INPUT
// HANDEL
TEST_SCORE_ANSWER_BUTTON.onclick = () => {
    testScoreStandardized = TEST_SCORE_STANDARDIZED_INPUT.value * 1;
    testScoreSubjectA = TEST_SCORE_SUBJECT_A_INPUT.value * 1;
    testScoreSubjectB = TEST_SCORE_SUBJECT_B_INPUT.value * 1;
    testScoreSubjectC = TEST_SCORE_SUBJECT_C_INPUT.value * 1;
    scorePlusByRegion = TEST_SCORE_BY_REGION.value * 1;
    scorePlusByObject = TEST_SCORE_BY_OBJECT.value * 1;
    // First if
    if (TEST_SCORE_STANDARDIZED_INPUT.value == "" || TEST_SCORE_SUBJECT_A_INPUT.value == "" || TEST_SCORE_SUBJECT_B_INPUT.value == "" || TEST_SCORE_SUBJECT_C_INPUT.value == "" || TEST_SCORE_BY_REGION == "" || TEST_SCORE_BY_OBJECT.value == "") {
        // OUTPUT
        alert("Vui lòng điền đủ thông tin!")

        // OUTPUT
    } else if (testScoreStandardized >= 0 && testScoreSubjectA >= 0 && testScoreSubjectB >= 0 && testScoreSubjectC >= 0 && scorePlusByRegion >= 0 && scorePlusByObject >= 0) {
        testScoreTotal = testScoreSubjectA +
            testScoreSubjectB +
            testScoreSubjectC +
            scorePlusByRegion +
            scorePlusByObject;
        // Second if
        if (testScoreTotal >= testScoreStandardized) {
            // OUPUT 
            TEST_SCORE_ANSWER_BUTTON.innerHTML = `Tổng điểm của thí sinh: ${testScoreTotal}. Thí sinh đậu!`;
            // END OUPUT 
        } else {
            // OUPUT 
            TEST_SCORE_ANSWER_BUTTON.innerHTML = `Tổng điểm của thí sinh: ${testScoreTotal}.Thí sinh đậu!`;
            // END OUPUT 
        }
    } else {
        // OUTPUT
        alert("Dữ liệu không hợp lệ!")
        // OUTPUT
    }
}
// END HANDEL
/**
 * BAI 2: Tinh tien dien
 * ELECTRICITY BILL = eBill
 */
// INPUT
const ELECTRICITY_NAME = document.getElementById("electricity_input_name")
const ELECTRICITY_BILL = document.getElementById("electricity_input_bill");
const ELECTRICITY_BUTTON = document.getElementById("electricity_btn");
var eName = "";
var eBill = 0;
var ePrice = 0;
// END INPUT
// HANDEL
ELECTRICITY_BUTTON.onclick = () => {
    // handle
    eName = ELECTRICITY_NAME.value;
    eBill = ELECTRICITY_BILL.value * 1;
    // end handle
    if (eName == "" || eBill <= 0) {
        window.alert("Điền thông tin vào ô trống!")
    } else {
        if (eBill <= 50) {
            ePrice = 500;
            // OUTPUT
            ELECTRICITY_BUTTON.innerHTML = `Khách hàng: ${eName} , tiền điện: ${ePrice * eBill} đ`
            // END OUTPUT
        } else if (eBill <= 100 && eBill > 50) {
            ePrice = 650;
            // OUTPUT
            ELECTRICITY_BUTTON.innerHTML = `Khách hàng: ${eName} , tiền điện: ${ePrice * (eBill - 50) + 50 * 500} đ`
            // END OUTPUT
        } else if (eBill <= 200 && eBill > 100) {
            ePrice = 850;
            // OUTPUT
            ELECTRICITY_BUTTON.innerHTML = `Khách hàng: ${eName} , tiền điện: ${ePrice * (eBill - 100) + 50 * 500 + 50 * 650} đ`
            // END OUTPUT
        } else if (eBill <= 350 && eBill > 200) {
            ePrice = 1100;
            // OUTPUT
            ELECTRICITY_BUTTON.innerHTML = `Khách hàng: ${eName} , tiền điện: ${ePrice * (eBill - 200) + 50 * 500 + 50 * 650 + 100 * 850} đ`
            // END OUTPUT
        } else {
            ePrice = 1300;
            // OUTPUT
            ELECTRICITY_BUTTON.innerHTML = `Khách hàng: ${eName} , tiền điện: ${ePrice * (eBill - 350) + 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100} đ`
            // END OUTPUT
        }
    }

}
// END HANDEL
/**
 * Bai 3: Tinh thue thu nhap ca nha
 */
// input
var tax_name = "";
var tax_total_income = 0;
var tax_person_dependent = 0;
const TAX_NAME_INPUT = document.getElementById("tax_name_input");
const TAX_TOTAL_INCOME = document.getElementById("tax_total_income_input");
const TAXT_PERSON_DEPENDENT_INPUT = document.getElementById("taxt_person_dependent_input");
const TAX_RESULT_BUTTON = document.getElementById("tax_result_btn");
// end input
// output
var tax_income = 0;
var tax_singer_income = 0;
var tax = 0;

// end output
TAX_RESULT_BUTTON.onclick = () => {

    tax_name = TAX_NAME_INPUT.value;
    tax_total_income = TAX_TOTAL_INCOME.value * 1;
    tax_person_dependent = TAXT_PERSON_DEPENDENT_INPUT.value * 1;
    tax_income = tax_total_income - 4 - tax_person_dependent * 1.6;
    if (tax_name === "" || tax_total_income <= 0 || tax_person_dependent <= 0) {
        alert("Nhập thông tin vào ô trống");
    } else {


        // output
        if (tax_income <= 60) {
            tax = 5 / 100;
        } else if (tax_income > 60 && tax_income <= 120) {
            tax = 10 / 100;

        } else if (tax_income > 120 && tax_income <= 210) {
            tax = 15 / 100;

        } else if (tax_income > 210 && tax_income <= 384) {
            tax = 20 / 100;

        } else if (tax_income > 384 && tax_income <= 624) {
            tax = 25 / 100;

        } else if (tax_income > 624 && tax_income <= 960) {
            tax = 30 / 100;

        } else if (tax_income > 960) {
            tax = 35 / 100;

        }
        // tax_singer_income =Math.round(tax_income * tax);
        tax_singer_income =(tax_income * tax).toFixed(2);
        TAX_RESULT_BUTTON.innerHTML = `Thue TNCN cua ${tax_name} la ${tax_singer_income} đ.`
        // end output
    }
}
/**
 * BAI 4: VIet chuong trinh tinh hoa don cho khach hang
 * in__cus__invoice ---OUTPUT:   individual customers invoice: hóa đơn cho Khách hàng cá nhân
 * in__cus__invoice__pro__fee --- individual invoice processing fee : phí xử lý hóa đơn khách hàng cá nhân
 * in__bas__ser__fee --- individual basic service fee: phí dịch vụ cơ bản khách hàng cá nhân
 * in__pre__cha__ren__fee --- individual Premium channel rental fee : phí thuê kênh cao cấp. khách hàng cá nhân
 * bu__cus__invoice --- OUTPUT:   business customers invoice: hóa đơn cho Khách hàng doanh nghiệp.
 * bu__inv__pro__fee --- business invoice processing fee : phí xử lý hóa đơn khách hàng cá nhân
 * bu__bas__ser__fee --- business basic service fee: phí dịch vụ cơ bản khách hàng cá nhân
 * bu__pre__cha__rel__fee --- business Premium channel rental fee : phí thuê kênh cao cấp. khách hàng cá nhân
 * bu__ext__con__fee --- business extra connection fee: phí kết nối thêm của doanh nghiệp
 */
// input

var cus__invoice = 0;
//individual
const IN_CUS_INVOICE_PRO_FEE = 4.5;
const IN_BAS_SER_FEE = 20.5;
const IN_PRE_CHA_REN_FEE = 7.5; //* for input 
//bussiness
const BU_INV_PRO_FEE = 15;
const BU_BAS_SER_FEE = 75;
const BU_PRE_CHA_REL_FEE = 50; // * for input 
const BU_EXT_CON_FEE = 5; //* input 
// element
const SELECT_IN_BU = document.getElementById("select_in_bu");
const PRE_CHA_REN_INPUT = document.getElementById("pre_cha_ren_input"); //type = number
const CUS_CODE = document.getElementById("cus_code");// type = number
const BUTTON_RESUL_INVOICE = document.getElementById("button_resul_invoice");
const BU_EXT_CON_FEE_INPUT = document.getElementById("bu_ext_con_fee_input");  //type = number
const BU_EXT_CON_FEE_INPUT_WRAP = document.getElementById("bu_ext_con_fee_input_wrap");
// end input

// handel

BU_EXT_CON_FEE_INPUT_WRAP.setAttribute("style", "display:none");
SELECT_IN_BU.onchange = () => {
    if (SELECT_IN_BU.value == "individual") {
        BU_EXT_CON_FEE_INPUT_WRAP.setAttribute("style", "display:none");
    } else {
        BU_EXT_CON_FEE_INPUT_WRAP.setAttribute("style", "display:block");

    }
}
BUTTON_RESUL_INVOICE.onclick = () => {
    if (SELECT_IN_BU.value == "individual") {
        if(PRE_CHA_REN_INPUT.value*1 <=0 || CUS_CODE.value ==""){
            alert("Điền vào ô trống!");
        }else{

            cus__invoice = IN_CUS_INVOICE_PRO_FEE + IN_BAS_SER_FEE + IN_PRE_CHA_REN_FEE * (PRE_CHA_REN_INPUT.value * 1);
            // ouput
            BUTTON_RESUL_INVOICE.innerHTML =`Tiền hóa đơn: ${cus__invoice} $`;
            // end ouput
        }
    } else {
        if(PRE_CHA_REN_INPUT.value*1 <=0 || CUS_CODE.value =="" || BU_EXT_CON_FEE_INPUT.value*1 <0){
            alert("Điền vào ô trống!");
        }else {

            cus__invoice = BU_INV_PRO_FEE + BU_BAS_SER_FEE + BU_PRE_CHA_REL_FEE * (PRE_CHA_REN_INPUT.value * 1) + BU_EXT_CON_FEE * (BU_EXT_CON_FEE_INPUT.value * 1);
            // ouput
            BUTTON_RESUL_INVOICE.innerHTML =`Tiền hóa đơn: ${cus__invoice} $`;
            // end ouput
        }

    }
}
// end handel

// CONTROL THE LAYOUT
const SECTION1 = document.getElementsByClassName("section1");
const SECTION2 = document.getElementsByClassName("section2");
const SECTION3 = document.getElementsByClassName("section3");
const SECTION4 = document.getElementsByClassName("section4");

SECTION1[0].setAttribute("style", "display:block")
SECTION2[0].setAttribute("style", "display:none");
SECTION3[0].setAttribute("style", "display:none");
SECTION4[0].setAttribute("style", "display:none");
const SECTION = document.querySelectorAll("li");
SECTION[0].setAttribute("style", "background:#d500f9;color:white");

SECTION[0].onclick = () => {
    SECTION1[0].setAttribute("style", "display:block")
    SECTION2[0].setAttribute("style", "display:none");
    SECTION3[0].setAttribute("style", "display:none");
    SECTION4[0].setAttribute("style", "display:none");
    SECTION[1].setAttribute("style", "background:#efebe9;color:black");
    SECTION[2].setAttribute("style", "background:#efebe9;color:black");
    SECTION[3].setAttribute("style", "background:#efebe9;color:black");
    SECTION[0].setAttribute("style", "background:#d500f9;color:white");
}
SECTION[1].onclick = () => {
    SECTION2[0].setAttribute("style", "display:block")
    SECTION1[0].setAttribute("style", "display:none");
    SECTION3[0].setAttribute("style", "display:none");
    SECTION4[0].setAttribute("style", "display:none");

    SECTION[0].setAttribute("style", "background:#efebe9;color:black");
    SECTION[2].setAttribute("style", "background:#efebe9;color:black");
    SECTION[3].setAttribute("style", "background:#efebe9;color:black");
    SECTION[1].setAttribute("style", "background:#d500f9;color:white");
}
SECTION[2].onclick = () => {
    SECTION3[0].setAttribute("style", "display:block")
    SECTION2[0].setAttribute("style", "display:none");
    SECTION1[0].setAttribute("style", "display:none");
    SECTION4[0].setAttribute("style", "display:none");
    SECTION[0].setAttribute("style", "background:#efebe9;color:black");
    SECTION[1].setAttribute("style", "background:#efebe9;color:black");
    SECTION[3].setAttribute("style", "background:#efebe9;color:black");
    SECTION[2].setAttribute("style", "background:#d500f9;color:white");
}
SECTION[3].onclick = () => {
    SECTION4[0].setAttribute("style", "display:block")
    SECTION2[0].setAttribute("style", "display:none");
    SECTION3[0].setAttribute("style", "display:none");
    SECTION1[0].setAttribute("style", "display:none");
    SECTION[0].setAttribute("style", "background:#efebe9;color:black");
    SECTION[1].setAttribute("style", "background:#efebe9;color:black");
    SECTION[2].setAttribute("style", "background:#efebe9;color:black");
    SECTION[3].setAttribute("style", "background:#d500f9;color:white");
}