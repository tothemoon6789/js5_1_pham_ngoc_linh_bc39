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
            TEST_SCORE_ANSWER_BUTTON.innerHTML = "Thí sinh đậu!"
            // END OUPUT 
        } else {
            // OUPUT 
            TEST_SCORE_ANSWER_BUTTON.innerHTML = "Thí sinh rớt!"
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
            ELECTRICITY_BUTTON.innerHTML =`Khách hàng: ${eName} , tiền điện: ${ePrice*eBill} đ`
            // END OUTPUT
        } else if (eBill <= 100 && eBill > 50) {
            ePrice = 650;
            // OUTPUT
            ELECTRICITY_BUTTON.innerHTML =`Khách hàng: ${eName} , tiền điện: ${ePrice*eBill} đ`
            // END OUTPUT
        } else if (eBill <= 200 && eBill > 100) {
            ePrice = 850;
            // OUTPUT
            ELECTRICITY_BUTTON.innerHTML =`Khách hàng: ${eName} , tiền điện: ${ePrice*eBill} đ`
            // END OUTPUT
        } else if (eBill <= 350 && eBill > 200) {
            ePrice = 1100;
            // OUTPUT
            ELECTRICITY_BUTTON.innerHTML =`Khách hàng: ${eName} , tiền điện: ${ePrice*eBill} đ`
            // END OUTPUT
        } else {
            ePrice = 1300;
            // OUTPUT
            ELECTRICITY_BUTTON.innerHTML =`Khách hàng: ${eName} , tiền điện: ${ePrice*eBill} đ` 
            // END OUTPUT
        }
    }

}
// END HANDEL