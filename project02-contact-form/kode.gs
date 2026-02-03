const SHEET_ID = '11Y8fIi2WIKKANXVRPSAM_fH5wyRvK6pZ3jkx1IbGs6Q';

function doGet() {
return HtmlService.createTemplateFromFile('index')
.evaluate()
.setTitle('Contact Form');
}

function include(filename) {
return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
function submitForm(data) {
const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
sheet.appendRow([
new Date(),
data.name,
data.email,
data.message
]);
return 'success';
}
