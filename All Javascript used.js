//-------------------------------------------------------------
//-----------------Do not edit the XML tags--------------------
//-------------------------------------------------------------

//<Document-Level>
//<ACRO_source>!ADBE::0100_VersChkStrings</ACRO_source>
//<ACRO_script>
/*********** belongs to: Document-Level:!ADBE::0100_VersChkStrings ***********/
if (typeof(this.ADBE) == "undefined") this.ADBE = new Object();
ADBE.LANGUAGE = "ENU";
ADBE.Viewer_string_Title = "Adobe Acrobat";

ADBE.Reader_string_Need_New_Version_Msg = "This PDF form requires a newer version of Adobe Reader. Without a newer version, the form may display, but may not work properly. Some form elements might not be visible at all. If an internet connection is available, clicking OK will open your browser to a web page where you can obtain the latest version.";
ADBE.Viewer_string_PMD_Old = "A newer version of Adobe software is required. For more information, copy and paste the URL below into a browser.";
ADBE.Viewer_string_PMD = "This document requires a newer version of Adobe Acrobat. Without a newer version, it might not work properly. Some elements might not be visible at all. Click OK to get more information to obtain the latest version of Adobe Reader.";
ADBE.Viewer_string_Update_Desc = "Adobe Interactive Forms Update";

//</ACRO_script>
//</Document-Level>

//<Document-Level>
//<ACRO_source>!ADBE::0100_VersChkVars</ACRO_source>
//<ACRO_script>
/*********** belongs to: Document-Level:!ADBE::0100_VersChkVars ***********/
ADBE.PMD_Need_Version = 7.05;
if (app.platform == "UNIX" && ADBE.PMD_Need_Version < 8) ADBE.PMD_Need_Version = 8;
if (typeof(ADBE.Reader_Value_Asked) == "undefined") ADBE.Reader_Value_Asked = false;
if (typeof(ADBE.Viewer_Value_Asked) == "undefined") ADBE.Viewer_Value_Asked = false;

if (typeof(ADBE.Reader_Need_Version) == "undefined" || ADBE.Reader_Need_Version < ADBE.PMD_Need_Version)
{
    ADBE.Reader_Need_Version = ADBE.PMD_Need_Version;
    ADBE.Reader_Value_New_Version_URL = "http://cgi.adobe.com/special/acrobat/update";
    ADBE.SYSINFO = "?p=" + app.platform + "&v=" + app.viewerVersion + "&l=" + app.language + "&c=" + app.viewerType + "&r=" + ADBE.Reader_Need_Version;
}
if (typeof(ADBE.Viewer_Need_Version) == "undefined" || ADBE.Viewer_Need_Version < ADBE.PMD_Need_Version)
{
    ADBE.Viewer_Need_Version = ADBE.PMD_Need_Version;
    ADBE.Viewer_Value_New_Version_URL = "http://cgi.adobe.com/special/acrobat/update";
    ADBE.SYSINFO = "?p=" + app.platform + "&v=" + app.viewerVersion + "&l=" + app.language + "&c=" + app.viewerType + "&r=" + ADBE.Viewer_Need_Version;
}

//</ACRO_script>
//</Document-Level>

//<Document-Level>
//<ACRO_source>!ADBE::0200_VersChkCode_PMD1</ACRO_source>
//<ACRO_script>
/*********** belongs to: Document-Level:!ADBE::0200_VersChkCode_PMD1 ***********/
if (app.viewerType == "Reader")
{
    if (app.viewerVersion < ADBE.Reader_Need_Version && !ADBE.Reader_Value_Asked)
    {
        if (app.alert(ADBE.Reader_string_Need_New_Version_Msg, 1, 1) == 1) this.getURL(ADBE.Reader_Value_New_Version_URL + ADBE.SYSINFO, false);
            ADBE.Reader_Value_Asked = true;
    }
}
else
{
    if (app.viewerVersion < ADBE.Viewer_Need_Version && !ADBE.Viewer_Value_Asked)
    {
        if (app.viewerVersion > 7)
        {
            if (app.alert(ADBE.Viewer_string_PMD, 1, 1) == 1)
                app.findComponent({cType:"Plugin", cName:"XFA", cDesc: ADBE.Viewer_string_Update_Desc});
        }
        else if (app.viewerVersion > 6 && ADBE.Viewer_Need_Version < 7)
        {
            if (app.alert(ADBE.Viewer_string_PMD, 1, 1) == 1)
                app.findComponent({cType:"UDPatch", cName:"602Patch", cDesc: ADBE.Viewer_string_Update_Desc});
        }
        else
            app.response({cQuestion:ADBE.Viewer_string_PMD_Old, cDefault:ADBE.Viewer_Value_New_Version_URL + ADBE.SYSINFO, cTitle:ADBE.Viewer_string_Title});
    ADBE.Viewer_Value_Asked = true;
    }
}

//</ACRO_script>
//</Document-Level>

//<Document-Level>
//<ACRO_source>CheckboxValidate</ACRO_source>
//<ACRO_script>
/*********** belongs to: Document-Level:CheckboxValidate ***********/
function CheckboxValidate()
{ 
    if(this.getField("NoAccessories.0").rawValue=="1")
    {
       this.getField("R4WCheck.0").value="Off";
       this.getField("R3WCheck.0").value="Off";
       this.getField("RGasCheck.0").value="Off";
       this.getField("DishPowerCheck.0").value="Off";
       this.getField("DishHoseCheck.0").value="Off";
       this.getField("D4WCheck.0").value="Off";
       this.getField("D3WCheck.0").value="Off";
       this.getField("DVentCheck.0").value="Off";
       this.getField("DGasCheck.0").value="Off";
       this.getField("WashLineCheck.0").value="Off";
       this.getField("RefLineCheck.0").value="Off";
    }
}
//</ACRO_script>
//</Document-Level>

//<Document-Level>
//<ACRO_source>HidePage</ACRO_source>
//<ACRO_script>
/*********** belongs to: Document-Level:HidePage ***********/
function HidePage()
{
  this.page("Delivery1").presence="hidden";
  Delivery2.presence="hidden";
  Delivery3.presence="hidden";
  Delivery4.presence="hidden";
  Delivery5.presence="hidden";
  Delivery6.presence="hidden";
  Exchange1.presence="hidden";
  Exchange2.presence="hidden";
}
//</ACRO_script>
//</Document-Level>

//<AcroForm>
//<ACRO_source>Accessories.0:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Accessories.0:Calculate ***********/
var accTotal = null;
switch (this.getField("NoAccessories.0").value) {
	case "Yes" :
	accTotal = null;
	break;
	case "Off" : 
	
	break;
	default: 
	accTotal = null;
}

switch (this.getField("R4WCheck.0").value) {
	case "Yes" :
	accTotal = accTotal + this.getField("R4W.0").value;
	this.getField("NoAccessories.0").value="Off";
	break;
	case "Off" : 
	accTotal =accTotal;
	break;
	default: 
	accTotal = accTotal;
}

switch (this.getField("R3WCheck.0").value) {
	case "Yes" :
	accTotal = accTotal + this.getField("R4W.0").value;
	this.getField("NoAccessories.0").value="Off";
	break;
	case "Off" : 
	accTotal =accTotal;
	break;
	default: 
	accTotal = accTotal;
}
switch (this.getField("RGasCheck.0").value) {
	case "Yes" :
	accTotal = accTotal + this.getField("RGas.0").value;
	this.getField("NoAccessories.0").value="Off";
	break;
	case "Off" : 
	accTotal =accTotal;
	break;
	default: 
	accTotal = accTotal;
}
switch (this.getField("D4WCheck.0").value) {
	case "Yes" :
	accTotal = accTotal + this.getField("D4W.0").value;
	this.getField("NoAccessories.0").value="Off";
	break;
	case "Off" : 
	accTotal =accTotal;
	break;
	default: 
	accTotal = accTotal;
}
switch (this.getField("D3WCheck.0").value) {
	case "Yes" :
	accTotal = accTotal + this.getField("D3W.0").value;
	this.getField("NoAccessories.0").value="Off";
	break;
	case "Off" : 
	accTotal =accTotal;
	break;
	default: 
	accTotal = accTotal;
}
switch (this.getField("DVentCheck.0").value) {
	case "Yes" :
	accTotal = accTotal + this.getField("DVent.0").value;
	this.getField("NoAccessories.0").value="Off";
	break;
	case "Off" : 
	accTotal =accTotal;
	break;
	default: 
	accTotal = accTotal;
}
switch (this.getField("DGasCheck.0").value) {
	case "Yes" :
	accTotal = accTotal + this.getField("DGas.0").value;
	this.getField("NoAccessories.0").value="Off";
	break;
	case "Off" : 
	accTotal =accTotal;
	break;
	default: 
	accTotal = accTotal;
}
switch (this.getField("WashLineCheck.0").value) {
	case "Yes" :
	accTotal = accTotal + this.getField("WashLine.0").value;
	this.getField("NoAccessories.0").value="Off";
	break;
	case "Off" : 
	accTotal =accTotal;
	break;
	default: 
	accTotal = accTotal;
}
switch (this.getField("RefLineCheck.0").value) {
	case "Yes" :
	accTotal = accTotal + this.getField("RefLine.0").value;
	this.getField("NoAccessories.0").value="Off";
	break;
	case "Off" : 
	accTotal =accTotal;
	break;
	default: 
	accTotal = accTotal;
}
switch (this.getField("DishPowerCheck.0").value) {
	case "Yes" :
	accTotal = accTotal + this.getField("DishPower.0").value;
	this.getField("NoAccessories.0").value="Off";
	break;
	case "Off" : 
	accTotal =accTotal;
	break;
	default: 
	accTotal = accTotal;
}
switch (this.getField("DishHoseCheck.0").value) {
	case "Yes" :
	accTotal = accTotal + this.getField("DishHose.0").value;
	this.getField("NoAccessories.0").value="Off";
	break;
	case "Off" : 
	accTotal =accTotal;
	break;
	default: 
	accTotal = accTotal;
}

event.value = accTotal.toFixed(2);
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Accessories.1:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Accessories.1:Calculate ***********/
var accTotal = null;
switch (this.getField("NoAccessories.1").value) {
	case "Yes" :
	accTotal = null;
	break;
	case "Off" : 
	
	break;
	default: 
	accTotal = null;
}

switch (this.getField("R4WCheck.1").value) {
	case "Yes" :
	accTotal = accTotal + this.getField("R4W.1").value;
	this.getField("NoAccessories.1").value="Off";
	break;
	case "Off" : 
	accTotal =accTotal;
	break;
	default: 
	accTotal = accTotal;
}

switch (this.getField("R3WCheck.1").value) {
	case "Yes" :
	accTotal = accTotal + this.getField("R4W.1").value;
	this.getField("NoAccessories.1").value="Off";
	break;
	case "Off" : 
	accTotal =accTotal;
	break;
	default: 
	accTotal = accTotal;
}
switch (this.getField("RGasCheck.1").value) {
	case "Yes" :
	accTotal = accTotal + this.getField("RGas.1").value;
	this.getField("NoAccessories.1").value="Off";
	break;
	case "Off" : 
	accTotal =accTotal;
	break;
	default: 
	accTotal = accTotal;
}
switch (this.getField("D4WCheck.1").value) {
	case "Yes" :
	accTotal = accTotal + this.getField("D4W.1").value;
	this.getField("NoAccessories.1").value="Off";
	break;
	case "Off" : 
	accTotal =accTotal;
	break;
	default: 
	accTotal = accTotal;
}
switch (this.getField("D3WCheck.1").value) {
	case "Yes" :
	accTotal = accTotal + this.getField("D3W.1").value;
	this.getField("NoAccessories.1").value="Off";
	break;
	case "Off" : 
	accTotal =accTotal;
	break;
	default: 
	accTotal = accTotal;
}
switch (this.getField("DVentCheck.1").value) {
	case "Yes" :
	accTotal = accTotal + this.getField("DVent.1").value;
	this.getField("NoAccessories.1").value="Off";
	break;
	case "Off" : 
	accTotal =accTotal;
	break;
	default: 
	accTotal = accTotal;
}
switch (this.getField("DGasCheck.1").value) {
	case "Yes" :
	accTotal = accTotal + this.getField("DGas.1").value;
	this.getField("NoAccessories.1").value="Off";
	break;
	case "Off" : 
	accTotal =accTotal;
	break;
	default: 
	accTotal = accTotal;
}
switch (this.getField("WashLineCheck.1").value) {
	case "Yes" :
	accTotal = accTotal + this.getField("WashLine.1").value;
	this.getField("NoAccessories.1").value="Off";
	break;
	case "Off" : 
	accTotal =accTotal;
	break;
	default: 
	accTotal = accTotal;
}
switch (this.getField("RefLineCheck.1").value) {
	case "Yes" :
	accTotal = accTotal + this.getField("RefLine.1").value;
	this.getField("NoAccessories.1").value="Off";
	break;
	case "Off" : 
	accTotal =accTotal;
	break;
	default: 
	accTotal = accTotal;
}
switch (this.getField("DishPowerCheck.1").value) {
	case "Yes" :
	accTotal = accTotal + this.getField("DishPower.1").value;
	this.getField("NoAccessories.1").value="Off";
	break;
	case "Off" : 
	accTotal =accTotal;
	break;
	default: 
	accTotal = accTotal;
}
switch (this.getField("DishHoseCheck.1").value) {
	case "Yes" :
	accTotal = accTotal + this.getField("DishHose.1").value;
	this.getField("NoAccessories.1").value="Off";
	break;
	case "Off" : 
	accTotal =accTotal;
	break;
	default: 
	accTotal = accTotal;
}

event.value = accTotal.toFixed(2);
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Accessories.2:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Accessories.2:Calculate ***********/
var accTotal = null;
switch (this.getField("NoAccessories.2").value) {
	case "Yes" :
	accTotal = null;
	break;
	case "Off" : 
	
	break;
	default: 
	accTotal = null;
}

switch (this.getField("R4WCheck.2").value) {
	case "Yes" :
	accTotal = accTotal + this.getField("R4W.2").value;
	this.getField("NoAccessories.2").value="Off";
	break;
	case "Off" : 
	accTotal =accTotal;
	break;
	default: 
	accTotal = accTotal;
}

switch (this.getField("R3WCheck.2").value) {
	case "Yes" :
	accTotal = accTotal + this.getField("R4W.2").value;
	this.getField("NoAccessories.2").value="Off";
	break;
	case "Off" : 
	accTotal =accTotal;
	break;
	default: 
	accTotal = accTotal;
}
switch (this.getField("RGasCheck.2").value) {
	case "Yes" :
	accTotal = accTotal + this.getField("RGas.2").value;
	this.getField("NoAccessories.2").value="Off";
	break;
	case "Off" : 
	accTotal =accTotal;
	break;
	default: 
	accTotal = accTotal;
}
switch (this.getField("D4WCheck.2").value) {
	case "Yes" :
	accTotal = accTotal + this.getField("D4W.2").value;
	this.getField("NoAccessories.2").value="Off";
	break;
	case "Off" : 
	accTotal =accTotal;
	break;
	default: 
	accTotal = accTotal;
}
switch (this.getField("D3WCheck.2").value) {
	case "Yes" :
	accTotal = accTotal + this.getField("D3W.2").value;
	this.getField("NoAccessories.2").value="Off";
	break;
	case "Off" : 
	accTotal =accTotal;
	break;
	default: 
	accTotal = accTotal;
}
switch (this.getField("DVentCheck.2").value) {
	case "Yes" :
	accTotal = accTotal + this.getField("DVent.2").value;
	this.getField("NoAccessories.2").value="Off";
	break;
	case "Off" : 
	accTotal =accTotal;
	break;
	default: 
	accTotal = accTotal;
}
switch (this.getField("DGasCheck.2").value) {
	case "Yes" :
	accTotal = accTotal + this.getField("DGas.2").value;
	this.getField("NoAccessories.2").value="Off";
	break;
	case "Off" : 
	accTotal =accTotal;
	break;
	default: 
	accTotal = accTotal;
}
switch (this.getField("WashLineCheck.2").value) {
	case "Yes" :
	accTotal = accTotal + this.getField("WashLine.2").value;
	this.getField("NoAccessories.2").value="Off";
	break;
	case "Off" : 
	accTotal =accTotal;
	break;
	default: 
	accTotal = accTotal;
}
switch (this.getField("RefLineCheck.2").value) {
	case "Yes" :
	accTotal = accTotal + this.getField("RefLine.2").value;
	this.getField("NoAccessories.2").value="Off";
	break;
	case "Off" : 
	accTotal =accTotal;
	break;
	default: 
	accTotal = accTotal;
}
switch (this.getField("DishPowerCheck.2").value) {
	case "Yes" :
	accTotal = accTotal + this.getField("DishPower.2").value;
	this.getField("NoAccessories.2").value="Off";
	break;
	case "Off" : 
	accTotal =accTotal;
	break;
	default: 
	accTotal = accTotal;
}
switch (this.getField("DishHoseCheck.2").value) {
	case "Yes" :
	accTotal = accTotal + this.getField("DishHose.2").value;
	this.getField("NoAccessories.2").value="Off";
	break;
	case "Off" : 
	accTotal =accTotal;
	break;
	default: 
	accTotal = accTotal;
}

event.value = accTotal.toFixed(2);
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Accessories.3:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Accessories.3:Calculate ***********/
var accTotal = null;
switch (this.getField("NoAccessories.3").value) {
	case "Yes" :
	accTotal = null;
	break;
	case "Off" : 
	
	break;
	default: 
	accTotal = null;
}

switch (this.getField("R4WCheck.3").value) {
	case "Yes" :
	accTotal = accTotal + this.getField("R4W.3").value;
	this.getField("NoAccessories.3").value="Off";
	break;
	case "Off" : 
	accTotal =accTotal;
	break;
	default: 
	accTotal = accTotal;
}

switch (this.getField("R3WCheck.3").value) {
	case "Yes" :
	accTotal = accTotal + this.getField("R4W.3").value;
	this.getField("NoAccessories.3").value="Off";
	break;
	case "Off" : 
	accTotal =accTotal;
	break;
	default: 
	accTotal = accTotal;
}
switch (this.getField("RGasCheck.3").value) {
	case "Yes" :
	accTotal = accTotal + this.getField("RGas.3").value;
	this.getField("NoAccessories.3").value="Off";
	break;
	case "Off" : 
	accTotal =accTotal;
	break;
	default: 
	accTotal = accTotal;
}
switch (this.getField("D4WCheck.3").value) {
	case "Yes" :
	accTotal = accTotal + this.getField("D4W.3").value;
	this.getField("NoAccessories.3").value="Off";
	break;
	case "Off" : 
	accTotal =accTotal;
	break;
	default: 
	accTotal = accTotal;
}
switch (this.getField("D3WCheck.3").value) {
	case "Yes" :
	accTotal = accTotal + this.getField("D3W.3").value;
	this.getField("NoAccessories.3").value="Off";
	break;
	case "Off" : 
	accTotal =accTotal;
	break;
	default: 
	accTotal = accTotal;
}
switch (this.getField("DVentCheck.3").value) {
	case "Yes" :
	accTotal = accTotal + this.getField("DVent.3").value;
	this.getField("NoAccessories.3").value="Off";
	break;
	case "Off" : 
	accTotal =accTotal;
	break;
	default: 
	accTotal = accTotal;
}
switch (this.getField("DGasCheck.3").value) {
	case "Yes" :
	accTotal = accTotal + this.getField("DGas.3").value;
	this.getField("NoAccessories.3").value="Off";
	break;
	case "Off" : 
	accTotal =accTotal;
	break;
	default: 
	accTotal = accTotal;
}
switch (this.getField("WashLineCheck.3").value) {
	case "Yes" :
	accTotal = accTotal + this.getField("WashLine.3").value;
	this.getField("NoAccessories.3").value="Off";
	break;
	case "Off" : 
	accTotal =accTotal;
	break;
	default: 
	accTotal = accTotal;
}
switch (this.getField("RefLineCheck.3").value) {
	case "Yes" :
	accTotal = accTotal + this.getField("RefLine.3").value;
	this.getField("NoAccessories.3").value="Off";
	break;
	case "Off" : 
	accTotal =accTotal;
	break;
	default: 
	accTotal = accTotal;
}
switch (this.getField("DishPowerCheck.3").value) {
	case "Yes" :
	accTotal = accTotal + this.getField("DishPower.3").value;
	this.getField("NoAccessories.3").value="Off";
	break;
	case "Off" : 
	accTotal =accTotal;
	break;
	default: 
	accTotal = accTotal;
}
switch (this.getField("DishHoseCheck.3").value) {
	case "Yes" :
	accTotal = accTotal + this.getField("DishHose.3").value;
	this.getField("NoAccessories.3").value="Off";
	break;
	case "Off" : 
	accTotal =accTotal;
	break;
	default: 
	accTotal = accTotal;
}

event.value = accTotal.toFixed(2);
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Accessories.4:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Accessories.4:Calculate ***********/
var accTotal = null;
switch (this.getField("NoAccessories.4").value) {
	case "Yes" :
	accTotal = null;
	break;
	case "Off" : 
	
	break;
	default: 
	accTotal = null;
}

switch (this.getField("R4WCheck.4").value) {
	case "Yes" :
	accTotal = accTotal + this.getField("R4W.4").value;
	this.getField("NoAccessories.4").value="Off";
	break;
	case "Off" : 
	accTotal =accTotal;
	break;
	default: 
	accTotal = accTotal;
}

switch (this.getField("R3WCheck.4").value) {
	case "Yes" :
	accTotal = accTotal + this.getField("R4W.4").value;
	this.getField("NoAccessories.4").value="Off";
	break;
	case "Off" : 
	accTotal =accTotal;
	break;
	default: 
	accTotal = accTotal;
}
switch (this.getField("RGasCheck.4").value) {
	case "Yes" :
	accTotal = accTotal + this.getField("RGas.4").value;
	this.getField("NoAccessories.4").value="Off";
	break;
	case "Off" : 
	accTotal =accTotal;
	break;
	default: 
	accTotal = accTotal;
}
switch (this.getField("D4WCheck.4").value) {
	case "Yes" :
	accTotal = accTotal + this.getField("D4W.4").value;
	this.getField("NoAccessories.4").value="Off";
	break;
	case "Off" : 
	accTotal =accTotal;
	break;
	default: 
	accTotal = accTotal;
}
switch (this.getField("D3WCheck.4").value) {
	case "Yes" :
	accTotal = accTotal + this.getField("D3W.4").value;
	this.getField("NoAccessories.4").value="Off";
	break;
	case "Off" : 
	accTotal =accTotal;
	break;
	default: 
	accTotal = accTotal;
}
switch (this.getField("DVentCheck.4").value) {
	case "Yes" :
	accTotal = accTotal + this.getField("DVent.4").value;
	this.getField("NoAccessories.4").value="Off";
	break;
	case "Off" : 
	accTotal =accTotal;
	break;
	default: 
	accTotal = accTotal;
}
switch (this.getField("DGasCheck.4").value) {
	case "Yes" :
	accTotal = accTotal + this.getField("DGas.4").value;
	this.getField("NoAccessories.4").value="Off";
	break;
	case "Off" : 
	accTotal =accTotal;
	break;
	default: 
	accTotal = accTotal;
}
switch (this.getField("WashLineCheck.4").value) {
	case "Yes" :
	accTotal = accTotal + this.getField("WashLine.4").value;
	this.getField("NoAccessories.4").value="Off";
	break;
	case "Off" : 
	accTotal =accTotal;
	break;
	default: 
	accTotal = accTotal;
}
switch (this.getField("RefLineCheck.4").value) {
	case "Yes" :
	accTotal = accTotal + this.getField("RefLine.4").value;
	this.getField("NoAccessories.4").value="Off";
	break;
	case "Off" : 
	accTotal =accTotal;
	break;
	default: 
	accTotal = accTotal;
}
switch (this.getField("DishPowerCheck.4").value) {
	case "Yes" :
	accTotal = accTotal + this.getField("DishPower.4").value;
	this.getField("NoAccessories.4").value="Off";
	break;
	case "Off" : 
	accTotal =accTotal;
	break;
	default: 
	accTotal = accTotal;
}
switch (this.getField("DishHoseCheck.4").value) {
	case "Yes" :
	accTotal = accTotal + this.getField("DishHose.4").value;
	this.getField("NoAccessories.4").value="Off";
	break;
	case "Off" : 
	accTotal =accTotal;
	break;
	default: 
	accTotal = accTotal;
}

event.value = accTotal.toFixed(2);
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Accessories.5:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Accessories.5:Calculate ***********/
var accTotal = null;
switch (this.getField("NoAccessories.5").value) {
	case "Yes" :
	accTotal = null;
	break;
	case "Off" : 
	
	break;
	default: 
	accTotal = null;
}

switch (this.getField("R4WCheck.5").value) {
	case "Yes" :
	accTotal = accTotal + this.getField("R4W.5").value;
	this.getField("NoAccessories.5").value="Off";
	break;
	case "Off" : 
	accTotal =accTotal;
	break;
	default: 
	accTotal = accTotal;
}

switch (this.getField("R3WCheck.5").value) {
	case "Yes" :
	accTotal = accTotal + this.getField("R4W.5").value;
	this.getField("NoAccessories.5").value="Off";
	break;
	case "Off" : 
	accTotal =accTotal;
	break;
	default: 
	accTotal = accTotal;
}
switch (this.getField("RGasCheck.5").value) {
	case "Yes" :
	accTotal = accTotal + this.getField("RGas.5").value;
	this.getField("NoAccessories.5").value="Off";
	break;
	case "Off" : 
	accTotal =accTotal;
	break;
	default: 
	accTotal = accTotal;
}
switch (this.getField("D4WCheck.5").value) {
	case "Yes" :
	accTotal = accTotal + this.getField("D4W.5").value;
	this.getField("NoAccessories.5").value="Off";
	break;
	case "Off" : 
	accTotal =accTotal;
	break;
	default: 
	accTotal = accTotal;
}
switch (this.getField("D3WCheck.5").value) {
	case "Yes" :
	accTotal = accTotal + this.getField("D3W.5").value;
	this.getField("NoAccessories.5").value="Off";
	break;
	case "Off" : 
	accTotal =accTotal;
	break;
	default: 
	accTotal = accTotal;
}
switch (this.getField("DVentCheck.5").value) {
	case "Yes" :
	accTotal = accTotal + this.getField("DVent.5").value;
	this.getField("NoAccessories.5").value="Off";
	break;
	case "Off" : 
	accTotal =accTotal;
	break;
	default: 
	accTotal = accTotal;
}
switch (this.getField("DGasCheck.5").value) {
	case "Yes" :
	accTotal = accTotal + this.getField("DGas.5").value;
	this.getField("NoAccessories.5").value="Off";
	break;
	case "Off" : 
	accTotal =accTotal;
	break;
	default: 
	accTotal = accTotal;
}
switch (this.getField("WashLineCheck.5").value) {
	case "Yes" :
	accTotal = accTotal + this.getField("WashLine.5").value;
	this.getField("NoAccessories.5").value="Off";
	break;
	case "Off" : 
	accTotal =accTotal;
	break;
	default: 
	accTotal = accTotal;
}
switch (this.getField("RefLineCheck.5").value) {
	case "Yes" :
	accTotal = accTotal + this.getField("RefLine.5").value;
	this.getField("NoAccessories.5").value="Off";
	break;
	case "Off" : 
	accTotal =accTotal;
	break;
	default: 
	accTotal = accTotal;
}
switch (this.getField("DishPowerCheck.5").value) {
	case "Yes" :
	accTotal = accTotal + this.getField("DishPower.5").value;
	this.getField("NoAccessories.5").value="Off";
	break;
	case "Off" : 
	accTotal =accTotal;
	break;
	default: 
	accTotal = accTotal;
}
switch (this.getField("DishHoseCheck.5").value) {
	case "Yes" :
	accTotal = accTotal + this.getField("DishHose.5").value;
	this.getField("NoAccessories.5").value="Off";
	break;
	case "Off" : 
	accTotal =accTotal;
	break;
	default: 
	accTotal = accTotal;
}

event.value = accTotal.toFixed(2);
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>ActualLocation.0.0:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:ActualLocation.0.0:Calculate ***********/
event.value = this.getField("Location.0.0").value;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>ActualLocation.0.1:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:ActualLocation.0.1:Calculate ***********/
event.value = this.getField("Location.0.1").value;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>ActualLocation.0.2:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:ActualLocation.0.2:Calculate ***********/
event.value = this.getField("Location.0.2").value;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>ActualLocation.0.3:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:ActualLocation.0.3:Calculate ***********/
event.value = this.getField("Location.0.3").value;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>ActualLocation.0.4:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:ActualLocation.0.4:Calculate ***********/
event.value = this.getField("Location.0.4").value;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>ActualLocation.0.5:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:ActualLocation.0.5:Calculate ***********/
event.value = this.getField("Location.0.5").value;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>ActualLocation.0.r0:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:ActualLocation.0.r0:Calculate ***********/
event.value = this.getField("Location.0.r0").value;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>ActualLocation.0.r1:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:ActualLocation.0.r1:Calculate ***********/
event.value = this.getField("Location.0.r0").value;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>ActualLocation.1.0:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:ActualLocation.1.0:Calculate ***********/
event.value = this.getField("Location.1.0").value;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>ActualLocation.1.1:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:ActualLocation.1.1:Calculate ***********/
event.value = this.getField("Location.1.1").value;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>ActualLocation.1.2:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:ActualLocation.1.2:Calculate ***********/
event.value = this.getField("Location.1.2").value;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>ActualLocation.1.3:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:ActualLocation.1.3:Calculate ***********/
event.value = this.getField("Location.1.3").value;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>ActualLocation.1.4:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:ActualLocation.1.4:Calculate ***********/
event.value = this.getField("Location.1.4").value;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>ActualLocation.1.5:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:ActualLocation.1.5:Calculate ***********/
event.value = this.getField("Location.1.5").value;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>ActualLocation.1.r0:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:ActualLocation.1.r0:Calculate ***********/
event.value = this.getField("Location.1.r0").value;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>ActualLocation.1.r1:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:ActualLocation.1.r1:Calculate ***********/
event.value = this.getField("Location.1.r0").value;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>ActualLocation.2.0:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:ActualLocation.2.0:Calculate ***********/
event.value = this.getField("Location.2.0").value;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>ActualLocation.2.1:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:ActualLocation.2.1:Calculate ***********/
event.value = this.getField("Location.2.1").value;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>ActualLocation.2.2:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:ActualLocation.2.2:Calculate ***********/
event.value = this.getField("Location.2.2").value;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>ActualLocation.2.3:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:ActualLocation.2.3:Calculate ***********/
event.value = this.getField("Location.2.3").value;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>ActualLocation.2.4:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:ActualLocation.2.4:Calculate ***********/
event.value = this.getField("Location.2.4").value;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>ActualLocation.2.5:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:ActualLocation.2.5:Calculate ***********/
event.value = this.getField("Location.2.5").value;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>ActualLocation.2.r0:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:ActualLocation.2.r0:Calculate ***********/
event.value = this.getField("Location.2.r0").value;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>ActualLocation.2.r1:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:ActualLocation.2.r1:Calculate ***********/
event.value = this.getField("Location.2.r0").value;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>ActualLocation.3.0:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:ActualLocation.3.0:Calculate ***********/
event.value = this.getField("Location.3.0").value;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>ActualLocation.3.1:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:ActualLocation.3.1:Calculate ***********/
event.value = this.getField("Location.3.1").value;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>ActualLocation.3.2:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:ActualLocation.3.2:Calculate ***********/
event.value = this.getField("Location.3.2").value;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>ActualLocation.3.3:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:ActualLocation.3.3:Calculate ***********/
event.value = this.getField("Location.3.3").value;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>ActualLocation.3.4:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:ActualLocation.3.4:Calculate ***********/
event.value = this.getField("Location.3.4").value;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>ActualLocation.3.5:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:ActualLocation.3.5:Calculate ***********/
event.value = this.getField("Location.3.5").value;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>ActualLocation.4.0:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:ActualLocation.4.0:Calculate ***********/
event.value = this.getField("Location.4.0").value;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>ActualLocation.4.1:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:ActualLocation.4.1:Calculate ***********/
event.value = this.getField("Location.4.1").value;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>ActualLocation.4.2:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:ActualLocation.4.2:Calculate ***********/
event.value = this.getField("Location.4.2").value;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>ActualLocation.4.3:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:ActualLocation.4.3:Calculate ***********/
event.value = this.getField("Location.4.3").value;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>ActualLocation.4.4:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:ActualLocation.4.4:Calculate ***********/
event.value = this.getField("Location.4.4").value;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>ActualLocation.4.5:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:ActualLocation.4.5:Calculate ***********/
event.value = this.getField("Location.4.5").value;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Customer Name.0:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Customer Name.0:Calculate ***********/
event.value=this.getField("Name.0").value;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Customer Name.1:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Customer Name.1:Calculate ***********/
event.value=this.getField("Name.1").value;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Customer Name.2:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Customer Name.2:Calculate ***********/
event.value=this.getField("Name.2").value;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Customer Name.3:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Customer Name.3:Calculate ***********/
event.value=this.getField("Name.3").value;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Customer Name.4:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Customer Name.4:Calculate ***********/
event.value=this.getField("Name.4").value;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Customer Name.5:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Customer Name.5:Calculate ***********/
event.value=this.getField("Name.5").value;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Customer Name.8:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Customer Name.8:Calculate ***********/
event.value=this.getField("Name.r0").value;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Customer Name.9:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Customer Name.9:Calculate ***********/
event.value=this.getField("Name.r1").value;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Customer Phone.0:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Customer Phone.0:Calculate ***********/
event.value=this.getField("Contact Number.0").value;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Customer Phone.1:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Customer Phone.1:Calculate ***********/
event.value=this.getField("Contact Number.1").value;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Customer Phone.2:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Customer Phone.2:Calculate ***********/
event.value=this.getField("Contact Number.2").value;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Customer Phone.3:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Customer Phone.3:Calculate ***********/
event.value=this.getField("Contact Number.3").value;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Customer Phone.4:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Customer Phone.4:Calculate ***********/
event.value=this.getField("Contact Number.4").value;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Customer Phone.5:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Customer Phone.5:Calculate ***********/
event.value=this.getField("Contact Number.5").value;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Customer Phone.8:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Customer Phone.8:Calculate ***********/
event.value=this.getField("Phone.r0").value;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Customer Phone.9:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Customer Phone.9:Calculate ***********/
event.value=this.getField("Phone.r1").value;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>D3W.0:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:D3W.0:Calculate ***********/
switch (this.getField("D3WCheck.0").value) {
	case "Yes" :
	this.getField("D3W.0").display = display.visible;
	break;
	case "Off" : 
	this.getField("D3W.0").display = display.noPrint;
	break;
	default: 
	//this.getField("D3W") = display.noPrint;
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>D3W.1:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:D3W.1:Calculate ***********/
switch (this.getField("D3WCheck.1").value) {
	case "Yes" :
	this.getField("D3W.1").display = display.visible;
	break;
	case "Off" : 
	this.getField("D3W.1").display = display.noPrint;
	break;
	default: 
	//this.getField("D3W") = display.noPrint;
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>D3W.2:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:D3W.2:Calculate ***********/
switch (this.getField("D3WCheck.2").value) {
	case "Yes" :
	this.getField("D3W.2").display = display.visible;
	break;
	case "Off" : 
	this.getField("D3W.2").display = display.noPrint;
	break;
	default: 
	//this.getField("D3W") = display.noPrint;
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>D3W.3:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:D3W.3:Calculate ***********/
switch (this.getField("D3WCheck.3").value) {
	case "Yes" :
	this.getField("D3W.3").display = display.visible;
	break;
	case "Off" : 
	this.getField("D3W.3").display = display.noPrint;
	break;
	default: 
	//this.getField("D3W") = display.noPrint;
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>D3W.4:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:D3W.4:Calculate ***********/
switch (this.getField("D3WCheck.4").value) {
	case "Yes" :
	this.getField("D3W.4").display = display.visible;
	break;
	case "Off" : 
	this.getField("D3W.4").display = display.noPrint;
	break;
	default: 
	//this.getField("D3W") = display.noPrint;
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>D3W.5:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:D3W.5:Calculate ***********/
switch (this.getField("D3WCheck.5").value) {
	case "Yes" :
	this.getField("D3W.5").display = display.visible;
	break;
	case "Off" : 
	this.getField("D3W.5").display = display.noPrint;
	break;
	default: 
	//this.getField("D3W") = display.noPrint;
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>D4W.0:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:D4W.0:Calculate ***********/
switch (this.getField("D4WCheck.0").value) {
	case "Yes" :
	this.getField("D4W.0").display = display.visible;
	break;
	case "Off" : 
	this.getField("D4W.0").display = display.noPrint;
	break;
	default: 
	//this.getField("D4W") = display.noPrint;
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>D4W.1:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:D4W.1:Calculate ***********/
switch (this.getField("D4WCheck.1").value) {
	case "Yes" :
	this.getField("D4W.1").display = display.visible;
	break;
	case "Off" : 
	this.getField("D4W.1").display = display.noPrint;
	break;
	default: 
	//this.getField("D4W") = display.noPrint;
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>D4W.2:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:D4W.2:Calculate ***********/
switch (this.getField("D4WCheck.2").value) {
	case "Yes" :
	this.getField("D4W.2").display = display.visible;
	break;
	case "Off" : 
	this.getField("D4W.2").display = display.noPrint;
	break;
	default: 
	//this.getField("D4W") = display.noPrint;
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>D4W.3:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:D4W.3:Calculate ***********/
switch (this.getField("D4WCheck.3").value) {
	case "Yes" :
	this.getField("D4W.3").display = display.visible;
	break;
	case "Off" : 
	this.getField("D4W.3").display = display.noPrint;
	break;
	default: 
	//this.getField("D4W") = display.noPrint;
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>D4W.4:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:D4W.4:Calculate ***********/
switch (this.getField("D4WCheck.4").value) {
	case "Yes" :
	this.getField("D4W.4").display = display.visible;
	break;
	case "Off" : 
	this.getField("D4W.4").display = display.noPrint;
	break;
	default: 
	//this.getField("D4W") = display.noPrint;
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>D4W.5:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:D4W.5:Calculate ***********/
switch (this.getField("D4WCheck.5").value) {
	case "Yes" :
	this.getField("D4W.5").display = display.visible;
	break;
	case "Off" : 
	this.getField("D4W.5").display = display.noPrint;
	break;
	default: 
	//this.getField("D4W") = display.noPrint;
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>DGas.0:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:DGas.0:Calculate ***********/
switch (this.getField("DGasCheck.0").value) {
	case "Yes" :
	this.getField("DGas.0").display = display.visible;
	break;
	case "Off" : 
	this.getField("DGas.0").display = display.noPrint;
	break;
	default: 
	//this.getField("DGas") = display.noPrint;
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>DGas.1:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:DGas.1:Calculate ***********/
switch (this.getField("DGasCheck.1").value) {
	case "Yes" :
	this.getField("DGas.1").display = display.visible;
	break;
	case "Off" : 
	this.getField("DGas.1").display = display.noPrint;
	break;
	default: 
	//this.getField("DGas") = display.noPrint;
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>DGas.2:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:DGas.2:Calculate ***********/
switch (this.getField("DGasCheck.2").value) {
	case "Yes" :
	this.getField("DGas.2").display = display.visible;
	break;
	case "Off" : 
	this.getField("DGas.2").display = display.noPrint;
	break;
	default: 
	//this.getField("DGas") = display.noPrint;
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>DGas.3:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:DGas.3:Calculate ***********/
switch (this.getField("DGasCheck.3").value) {
	case "Yes" :
	this.getField("DGas.3").display = display.visible;
	break;
	case "Off" : 
	this.getField("DGas.3").display = display.noPrint;
	break;
	default: 
	//this.getField("DGas") = display.noPrint;
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>DGas.4:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:DGas.4:Calculate ***********/
switch (this.getField("DGasCheck.4").value) {
	case "Yes" :
	this.getField("DGas.4").display = display.visible;
	break;
	case "Off" : 
	this.getField("DGas.4").display = display.noPrint;
	break;
	default: 
	//this.getField("DGas") = display.noPrint;
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>DGas.5:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:DGas.5:Calculate ***********/
switch (this.getField("DGasCheck.5").value) {
	case "Yes" :
	this.getField("DGas.5").display = display.visible;
	break;
	case "Off" : 
	this.getField("DGas.5").display = display.noPrint;
	break;
	default: 
	//this.getField("DGas") = display.noPrint;
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>DVent.0:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:DVent.0:Calculate ***********/
switch (this.getField("DVentCheck.0").value) {
	case "Yes" :
	this.getField("DVent.0").display = display.visible;
	break;
	case "Off" : 
	this.getField("DVent.0").display = display.noPrint;
	break;
	default: 
	//this.getField("DVent") = display.noPrint;
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>DVent.1:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:DVent.1:Calculate ***********/
switch (this.getField("DVentCheck.1").value) {
	case "Yes" :
	this.getField("DVent.1").display = display.visible;
	break;
	case "Off" : 
	this.getField("DVent.1").display = display.noPrint;
	break;
	default: 
	//this.getField("DVent") = display.noPrint;
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>DVent.2:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:DVent.2:Calculate ***********/
switch (this.getField("DVentCheck.2").value) {
	case "Yes" :
	this.getField("DVent.2").display = display.visible;
	break;
	case "Off" : 
	this.getField("DVent.2").display = display.noPrint;
	break;
	default: 
	//this.getField("DVent") = display.noPrint;
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>DVent.3:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:DVent.3:Calculate ***********/
switch (this.getField("DVentCheck.3").value) {
	case "Yes" :
	this.getField("DVent.3").display = display.visible;
	break;
	case "Off" : 
	this.getField("DVent.3").display = display.noPrint;
	break;
	default: 
	//this.getField("DVent") = display.noPrint;
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>DVent.4:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:DVent.4:Calculate ***********/
switch (this.getField("DVentCheck.4").value) {
	case "Yes" :
	this.getField("DVent.4").display = display.visible;
	break;
	case "Off" : 
	this.getField("DVent.4").display = display.noPrint;
	break;
	default: 
	//this.getField("DVent") = display.noPrint;
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>DVent.5:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:DVent.5:Calculate ***********/
switch (this.getField("DVentCheck.5").value) {
	case "Yes" :
	this.getField("DVent.5").display = display.visible;
	break;
	case "Off" : 
	this.getField("DVent.5").display = display.noPrint;
	break;
	default: 
	//this.getField("DVent") = display.noPrint;
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Day.0:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Day.0:Calculate ***********/

event.value = this.getField("Delivery Day").value;

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Delivery Charge.0:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Delivery Charge.0:Calculate ***********/


var delivery = [[85234, 85296, 85299, 85206, 85204, 85236, 85295, 85233, 85205, 85225, 85210, 85211, 85214, 85216, 85274, 85275, 85277, 85297, 85213, 85209, 85244, 85212, 85246, 85208, 85203, 85202, 85224, 85286, 85201, 85298, 85207, 85249, 85256, 85280, 85285, 85282, 85283, 85284, 85127, 85287, 85281, 85120, 85248, 85117, 85178, 85257, 85215, 85226, 85252, 85261, 85267, 85269, 85271, 85251, 85119, 85142, 85250, 85044],
    [85140, 85008, 85258, 85259, 85034, 85040, 85018, 85268, 85042, 85118, 85253, 85143, 85048, 85006, 85260, 85016, 85004, 85098, 85065, 85001, 85002, 85010, 85011, 85030, 85036, 85038, 85046, 85060, 85061, 85062, 85063, 85064, 85066, 85067, 85068, 85069, 85071, 85072, 85073, 85074, 85075, 85076, 85078, 85079, 85080, 85082, 85070, 85026, 85147, 85003],
    [85014, 85007, 85255, 85028, 85041, 85012, 85254, 85045, 85013, 85009, 85020, 85015, 85005, 85032, 85017, 85097, 85021, 85019, 85054],
    [85022, 85043, 85339, 85138, 85031, 85121, 85051, 85029, 85263, 85050, 85035, 85023, 85264, 85025, 85311, 85312, 85318, 85301, 85024, 85033, 85302, 85053, 85303, 85304, 85027, 85128, 85266]
    ];
    var deliveryFee = [82.99, 86.99, 92.99, 102.99];
    var deliveryIndex = null;
    var stairFee = null;
    var gasFee = null;
    var saturdayFee
    var stairs = this.getField("Stairs.0").valueAsString;
    var gas = this.getField("Gas Hook Up.0").valueAsString;
    delivery.forEach(myFunction);
    function myFunction (item, index) {
        if (item.indexOf(this.getField("Zip Code.0").value, 0) > -1) {
          deliveryIndex = index;
        }
    }
switch (stairs) {
	case "Yes" :
	stairFee = 10;
	break;
	case "No" : 
	stairFee =0;
	break;
	default: 
	stairFee =0;
}

switch (gas) {
	case "Yes" :
	gasFee = 10.99;
	break;
	case "No" : 
	gasFee = 0;
	break;
	default: 
	gasFee = 0;
}
if (this.getField("Day.0").value == "Saturday ($10 Weekend Fee)") {
    saturdayFee = 10;
}
else {
    saturdayFee = 0;
}
event.value="Delivery Charge: " + (((this.getField("HaulAways.0").value-1)*10)+ (deliveryFee[deliveryIndex] + gasFee + stairFee + saturdayFee)).toFixed(2);



//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Delivery Charge.1:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Delivery Charge.1:Calculate ***********/


var delivery = [[85234, 85296, 85299, 85206, 85204, 85236, 85295, 85233, 85205, 85225, 85210, 85211, 85214, 85216, 85274, 85275, 85277, 85297, 85213, 85209, 85244, 85212, 85246, 85208, 85203, 85202, 85224, 85286, 85201, 85298, 85207, 85249, 85256, 85280, 85285, 85282, 85283, 85284, 85127, 85287, 85281, 85120, 85248, 85117, 85178, 85257, 85215, 85226, 85252, 85261, 85267, 85269, 85271, 85251, 85119, 85142, 85250, 85044],
    [85140, 85008, 85258, 85259, 85034, 85040, 85018, 85268, 85042, 85118, 85253, 85143, 85048, 85006, 85260, 85016, 85004, 85098, 85065, 85001, 85002, 85010, 85011, 85030, 85036, 85038, 85046, 85060, 85061, 85062, 85063, 85064, 85066, 85067, 85068, 85069, 85071, 85072, 85073, 85074, 85075, 85076, 85078, 85079, 85080, 85082, 85070, 85026, 85147, 85003],
    [85014, 85007, 85255, 85028, 85041, 85012, 85254, 85045, 85013, 85009, 85020, 85015, 85005, 85032, 85017, 85097, 85021, 85019, 85054],
    [85022, 85043, 85339, 85138, 85031, 85121, 85051, 85029, 85263, 85050, 85035, 85023, 85264, 85025, 85311, 85312, 85318, 85301, 85024, 85033, 85302, 85053, 85303, 85304, 85027, 85128, 85266]
    ];
    var deliveryFee = [82.99, 86.99, 92.99, 102.99];
    var deliveryIndex = null;
    var stairFee = null;
    var gasFee = null;
    var saturdayFee
    var stairs = this.getField("Stairs.1").valueAsString;
    var gas = this.getField("Gas Hook Up.1").valueAsString;
    delivery.forEach(myFunction);
    function myFunction (item, index) {
        if (item.indexOf(this.getField("Zip Code.1").value, 0) > -1) {
          deliveryIndex = index;
        }
    }
switch (stairs) {
	case "Yes" :
	stairFee = 10;
	break;
	case "No" : 
	stairFee =0;
	break;
	default: 
	stairFee =0;
}

switch (gas) {
	case "Yes" :
	gasFee = 10.99;
	break;
	case "No" : 
	gasFee = 0;
	break;
	default: 
	gasFee = 0;
}
if (this.getField("Day.0").value == "Saturday ($10 Weekend Fee)") {
    saturdayFee = 10;
}
else {
    saturdayFee = 0;
}
event.value="Delivery Charge: " + (((this.getField("HaulAways.1").value-1)*10)+ (deliveryFee[deliveryIndex] + gasFee + stairFee + saturdayFee)).toFixed(2);



//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Delivery Charge.2:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Delivery Charge.2:Calculate ***********/


var delivery = [[85234, 85296, 85299, 85206, 85204, 85236, 85295, 85233, 85205, 85225, 85210, 85211, 85214, 85216, 85274, 85275, 85277, 85297, 85213, 85209, 85244, 85212, 85246, 85208, 85203, 85202, 85224, 85286, 85201, 85298, 85207, 85249, 85256, 85280, 85285, 85282, 85283, 85284, 85127, 85287, 85281, 85120, 85248, 85117, 85178, 85257, 85215, 85226, 85252, 85261, 85267, 85269, 85271, 85251, 85119, 85142, 85250, 85044],
    [85140, 85008, 85258, 85259, 85034, 85040, 85018, 85268, 85042, 85118, 85253, 85143, 85048, 85006, 85260, 85016, 85004, 85098, 85065, 85001, 85002, 85010, 85011, 85030, 85036, 85038, 85046, 85060, 85061, 85062, 85063, 85064, 85066, 85067, 85068, 85069, 85071, 85072, 85073, 85074, 85075, 85076, 85078, 85079, 85080, 85082, 85070, 85026, 85147, 85003],
    [85014, 85007, 85255, 85028, 85041, 85012, 85254, 85045, 85013, 85009, 85020, 85015, 85005, 85032, 85017, 85097, 85021, 85019, 85054],
    [85022, 85043, 85339, 85138, 85031, 85121, 85051, 85029, 85263, 85050, 85035, 85023, 85264, 85025, 85311, 85312, 85318, 85301, 85024, 85033, 85302, 85053, 85303, 85304, 85027, 85128, 85266]
    ];
    var deliveryFee = [82.99, 86.99, 92.99, 102.99];
    var deliveryIndex = null;
    var stairFee = null;
    var gasFee = null;
    var saturdayFee
    var stairs = this.getField("Stairs.2").valueAsString;
    var gas = this.getField("Gas Hook Up.2").valueAsString;
    delivery.forEach(myFunction);
    function myFunction (item, index) {
        if (item.indexOf(this.getField("Zip Code.2").value, 0) > -1) {
          deliveryIndex = index;
        }
    }
switch (stairs) {
	case "Yes" :
	stairFee = 10;
	break;
	case "No" : 
	stairFee =0;
	break;
	default: 
	stairFee =0;
}

switch (gas) {
	case "Yes" :
	gasFee = 10.99;
	break;
	case "No" : 
	gasFee = 0;
	break;
	default: 
	gasFee = 0;
}
if (this.getField("Day.0").value == "Saturday ($10 Weekend Fee)") {
    saturdayFee = 10;
}
else {
    saturdayFee = 0;
}
event.value="Delivery Charge: " + (((this.getField("HaulAways.2").value-1)*10)+ (deliveryFee[deliveryIndex] + gasFee + stairFee + saturdayFee)).toFixed(2);



//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Delivery Charge.3:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Delivery Charge.3:Calculate ***********/


var delivery = [[85234, 85296, 85299, 85206, 85204, 85236, 85295, 85233, 85205, 85225, 85210, 85211, 85214, 85216, 85274, 85275, 85277, 85297, 85213, 85209, 85244, 85212, 85246, 85208, 85203, 85202, 85224, 85286, 85201, 85298, 85207, 85249, 85256, 85280, 85285, 85282, 85283, 85284, 85127, 85287, 85281, 85120, 85248, 85117, 85178, 85257, 85215, 85226, 85252, 85261, 85267, 85269, 85271, 85251, 85119, 85142, 85250, 85044],
    [85140, 85008, 85258, 85259, 85034, 85040, 85018, 85268, 85042, 85118, 85253, 85143, 85048, 85006, 85260, 85016, 85004, 85098, 85065, 85001, 85002, 85010, 85011, 85030, 85036, 85038, 85046, 85060, 85061, 85062, 85063, 85064, 85066, 85067, 85068, 85069, 85071, 85072, 85073, 85074, 85075, 85076, 85078, 85079, 85080, 85082, 85070, 85026, 85147, 85003],
    [85014, 85007, 85255, 85028, 85041, 85012, 85254, 85045, 85013, 85009, 85020, 85015, 85005, 85032, 85017, 85097, 85021, 85019, 85054],
    [85022, 85043, 85339, 85138, 85031, 85121, 85051, 85029, 85263, 85050, 85035, 85023, 85264, 85025, 85311, 85312, 85318, 85301, 85024, 85033, 85302, 85053, 85303, 85304, 85027, 85128, 85266]
    ];
    var deliveryFee = [82.99, 86.99, 92.99, 102.99];
    var deliveryIndex = null;
    var stairFee = null;
    var gasFee = null;
    var saturdayFee
    var stairs = this.getField("Stairs.3").valueAsString;
    var gas = this.getField("Gas Hook Up.3").valueAsString;
    delivery.forEach(myFunction);
    function myFunction (item, index) {
        if (item.indexOf(this.getField("Zip Code.3").value, 0) > -1) {
          deliveryIndex = index;
        }
    }
switch (stairs) {
	case "Yes" :
	stairFee = 10;
	break;
	case "No" : 
	stairFee =0;
	break;
	default: 
	stairFee =0;
}

switch (gas) {
	case "Yes" :
	gasFee = 10.99;
	break;
	case "No" : 
	gasFee = 0;
	break;
	default: 
	gasFee = 0;
}
if (this.getField("Day.0").value == "Saturday ($10 Weekend Fee)") {
    saturdayFee = 10;
}
else {
    saturdayFee = 0;
}
event.value="Delivery Charge: " + (((this.getField("HaulAways.3").value-1)*10)+ (deliveryFee[deliveryIndex] + gasFee + stairFee + saturdayFee)).toFixed(2);



//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Delivery Charge.4:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Delivery Charge.4:Calculate ***********/


var delivery = [[85234, 85296, 85299, 85206, 85204, 85236, 85295, 85233, 85205, 85225, 85210, 85211, 85214, 85216, 85274, 85275, 85277, 85297, 85213, 85209, 85244, 85212, 85246, 85208, 85203, 85202, 85224, 85286, 85201, 85298, 85207, 85249, 85256, 85280, 85285, 85282, 85283, 85284, 85127, 85287, 85281, 85120, 85248, 85117, 85178, 85257, 85215, 85226, 85252, 85261, 85267, 85269, 85271, 85251, 85119, 85142, 85250, 85044],
    [85140, 85008, 85258, 85259, 85034, 85040, 85018, 85268, 85042, 85118, 85253, 85143, 85048, 85006, 85260, 85016, 85004, 85098, 85065, 85001, 85002, 85010, 85011, 85030, 85036, 85038, 85046, 85060, 85061, 85062, 85063, 85064, 85066, 85067, 85068, 85069, 85071, 85072, 85073, 85074, 85075, 85076, 85078, 85079, 85080, 85082, 85070, 85026, 85147, 85003],
    [85014, 85007, 85255, 85028, 85041, 85012, 85254, 85045, 85013, 85009, 85020, 85015, 85005, 85032, 85017, 85097, 85021, 85019, 85054],
    [85022, 85043, 85339, 85138, 85031, 85121, 85051, 85029, 85263, 85050, 85035, 85023, 85264, 85025, 85311, 85312, 85318, 85301, 85024, 85033, 85302, 85053, 85303, 85304, 85027, 85128, 85266]
    ];
    var deliveryFee = [82.99, 86.99, 92.99, 102.99];
    var deliveryIndex = null;
    var stairFee = null;
    var gasFee = null;
    var saturdayFee
    var stairs = this.getField("Stairs.4").valueAsString;
    var gas = this.getField("Gas Hook Up.4").valueAsString;
    delivery.forEach(myFunction);
    function myFunction (item, index) {
        if (item.indexOf(this.getField("Zip Code.4").value, 0) > -1) {
          deliveryIndex = index;
        }
    }
switch (stairs) {
	case "Yes" :
	stairFee = 10;
	break;
	case "No" : 
	stairFee =0;
	break;
	default: 
	stairFee =0;
}

switch (gas) {
	case "Yes" :
	gasFee = 10.99;
	break;
	case "No" : 
	gasFee = 0;
	break;
	default: 
	gasFee = 0;
}
if (this.getField("Day.0").value == "Saturday ($10 Weekend Fee)") {
    saturdayFee = 10;
}
else {
    saturdayFee = 0;
}

event.value="Delivery Charge: " + (((this.getField("HaulAways.4").value-1)*10)+ (deliveryFee[deliveryIndex] + gasFee + stairFee + saturdayFee)).toFixed(2);



//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Delivery Charge.5:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Delivery Charge.5:Calculate ***********/


var delivery = [[85234, 85296, 85299, 85206, 85204, 85236, 85295, 85233, 85205, 85225, 85210, 85211, 85214, 85216, 85274, 85275, 85277, 85297, 85213, 85209, 85244, 85212, 85246, 85208, 85203, 85202, 85224, 85286, 85201, 85298, 85207, 85249, 85256, 85280, 85285, 85282, 85283, 85284, 85127, 85287, 85281, 85120, 85248, 85117, 85178, 85257, 85215, 85226, 85252, 85261, 85267, 85269, 85271, 85251, 85119, 85142, 85250, 85044],
    [85140, 85008, 85258, 85259, 85034, 85040, 85018, 85268, 85042, 85118, 85253, 85143, 85048, 85006, 85260, 85016, 85004, 85098, 85065, 85001, 85002, 85010, 85011, 85030, 85036, 85038, 85046, 85060, 85061, 85062, 85063, 85064, 85066, 85067, 85068, 85069, 85071, 85072, 85073, 85074, 85075, 85076, 85078, 85079, 85080, 85082, 85070, 85026, 85147, 85003],
    [85014, 85007, 85255, 85028, 85041, 85012, 85254, 85045, 85013, 85009, 85020, 85015, 85005, 85032, 85017, 85097, 85021, 85019, 85054],
    [85022, 85043, 85339, 85138, 85031, 85121, 85051, 85029, 85263, 85050, 85035, 85023, 85264, 85025, 85311, 85312, 85318, 85301, 85024, 85033, 85302, 85053, 85303, 85304, 85027, 85128, 85266]
    ];
    var deliveryFee = [82.99, 86.99, 92.99, 102.99];
    var deliveryIndex = null;
    var stairFee = null;
    var gasFee = null;
    var saturdayFee
    var stairs = this.getField("Stairs.5").valueAsString;
    var gas = this.getField("Gas Hook Up.5").valueAsString;
    delivery.forEach(myFunction);
    function myFunction (item, index) {
        if (item.indexOf(this.getField("Zip Code.5").value, 0) > -1) {
          deliveryIndex = index;
        }
    }
switch (stairs) {
	case "Yes" :
	stairFee = 10;
	break;
	case "No" : 
	stairFee =0;
	break;
	default: 
	stairFee =0;
}

switch (gas) {
	case "Yes" :
	gasFee = 10.99;
	break;
	case "No" : 
	gasFee = 0;
	break;
	default: 
	gasFee = 0;
}
if (this.getField("Day.0").value == "Saturday ($10 Weekend Fee)") {
    saturdayFee = 10;
}
else {
    saturdayFee = 0;
}
event.value="Delivery Charge: " + (((this.getField("HaulAways.5").value-1)*10)+ (deliveryFee[deliveryIndex] + gasFee + stairFee + saturdayFee)).toFixed(2);



//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Delivery Fee.0:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Delivery Fee.0:Calculate ***********/
event.value=this.getField("Delivery Charge.0").value.slice(16);
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Delivery Fee.1:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Delivery Fee.1:Calculate ***********/
event.value=this.getField("Delivery Charge.1").value.slice(16);
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Delivery Fee.2:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Delivery Fee.2:Calculate ***********/
event.value=this.getField("Delivery Charge.2").value.slice(16);
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Delivery Fee.3:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Delivery Fee.3:Calculate ***********/
event.value=this.getField("Delivery Charge.3").value.slice(16);
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Delivery Fee.4:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Delivery Fee.4:Calculate ***********/
event.value=this.getField("Delivery Charge.4").value.slice(16);
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Delivery Fee.5:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Delivery Fee.5:Calculate ***********/
event.value=this.getField("Delivery Charge.5").value.slice(16);
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>DishHose.0:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:DishHose.0:Calculate ***********/
switch (this.getField("DishHoseCheck.0").value) {
	case "Yes" :
	this.getField("DishHose.0").display = display.visible;
	break;
	case "Off" : 
	this.getField("DishHose.0").display = display.noPrint;
	break;
	default: 
	//this.getField("DishHose") = display.noPrint;
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>DishHose.1:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:DishHose.1:Calculate ***********/
switch (this.getField("DishHoseCheck.1").value) {
	case "Yes" :
	this.getField("DishHose.1").display = display.visible;
	break;
	case "Off" : 
	this.getField("DishHose.1").display = display.noPrint;
	break;
	default: 
	//this.getField("DishHose") = display.noPrint;
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>DishHose.2:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:DishHose.2:Calculate ***********/
switch (this.getField("DishHoseCheck.2").value) {
	case "Yes" :
	this.getField("DishHose.2").display = display.visible;
	break;
	case "Off" : 
	this.getField("DishHose.2").display = display.noPrint;
	break;
	default: 
	//this.getField("DishHose") = display.noPrint;
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>DishHose.3:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:DishHose.3:Calculate ***********/
switch (this.getField("DishHoseCheck.3").value) {
	case "Yes" :
	this.getField("DishHose.3").display = display.visible;
	break;
	case "Off" : 
	this.getField("DishHose.3").display = display.noPrint;
	break;
	default: 
	//this.getField("DishHose") = display.noPrint;
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>DishHose.4:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:DishHose.4:Calculate ***********/
switch (this.getField("DishHoseCheck.4").value) {
	case "Yes" :
	this.getField("DishHose.4").display = display.visible;
	break;
	case "Off" : 
	this.getField("DishHose.4").display = display.noPrint;
	break;
	default: 
	//this.getField("DishHose") = display.noPrint;
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>DishHose.5:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:DishHose.5:Calculate ***********/
switch (this.getField("DishHoseCheck.5").value) {
	case "Yes" :
	this.getField("DishHose.5").display = display.visible;
	break;
	case "Off" : 
	this.getField("DishHose.5").display = display.noPrint;
	break;
	default: 
	//this.getField("DishHose") = display.noPrint;
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>DishPower.0:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:DishPower.0:Calculate ***********/
switch (this.getField("DishPowerCheck.0").value) {
	case "Yes" :
	this.getField("DishPower.0").display = display.visible;
	break;
	case "Off" : 
	this.getField("DishPower.0").display = display.noPrint;
	break;
	default: 
	//this.getField("DishPower") = display.noPrint;
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>DishPower.1:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:DishPower.1:Calculate ***********/
switch (this.getField("DishPowerCheck.1").value) {
	case "Yes" :
	this.getField("DishPower.1").display = display.visible;
	break;
	case "Off" : 
	this.getField("DishPower.1").display = display.noPrint;
	break;
	default: 
	//this.getField("DishPower") = display.noPrint;
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>DishPower.2:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:DishPower.2:Calculate ***********/
switch (this.getField("DishPowerCheck.2").value) {
	case "Yes" :
	this.getField("DishPower.2").display = display.visible;
	break;
	case "Off" : 
	this.getField("DishPower.2").display = display.noPrint;
	break;
	default: 
	//this.getField("DishPower") = display.noPrint;
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>DishPower.3:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:DishPower.3:Calculate ***********/
switch (this.getField("DishPowerCheck.3").value) {
	case "Yes" :
	this.getField("DishPower.3").display = display.visible;
	break;
	case "Off" : 
	this.getField("DishPower.3").display = display.noPrint;
	break;
	default: 
	//this.getField("DishPower") = display.noPrint;
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>DishPower.4:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:DishPower.4:Calculate ***********/
switch (this.getField("DishPowerCheck.4").value) {
	case "Yes" :
	this.getField("DishPower.4").display = display.visible;
	break;
	case "Off" : 
	this.getField("DishPower.4").display = display.noPrint;
	break;
	default: 
	//this.getField("DishPower") = display.noPrint;
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>DishPower.5:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:DishPower.5:Calculate ***********/
switch (this.getField("DishPowerCheck.5").value) {
	case "Yes" :
	this.getField("DishPower.5").display = display.visible;
	break;
	case "Off" : 
	this.getField("DishPower.5").display = display.noPrint;
	break;
	default: 
	//this.getField("DishPower") = display.noPrint;
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>HaulAways.0:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:HaulAways.0:Calculate ***********/
switch (this.getField("HaulAway.0").value) {
	case "Yes" :
	event.display = display.visible;
	break;
	case "Off" : 
	event.display = display.noPrint;
	break;
	default: 
	//can't think of anything to put here, but it doesn't work without at least a comment.
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>HaulAways.1:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:HaulAways.1:Calculate ***********/
switch (this.getField("HaulAway.1").value) {
	case "Yes" :
	event.display = display.visible;
	break;
	case "Off" : 
	event.display = display.noPrint;
	break;
	default: 
	//can't think of anything to put here, but it doesn't work without at least a comment.
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>HaulAways.2:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:HaulAways.2:Calculate ***********/
switch (this.getField("HaulAway.2").value) {
	case "Yes" :
	event.display = display.visible;
	break;
	case "Off" : 
	event.display = display.noPrint;
	break;
	default: 
	//can't think of anything to put here, but it doesn't work without at least a comment.
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>HaulAways.3:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:HaulAways.3:Calculate ***********/
switch (this.getField("HaulAway.3").value) {
	case "Yes" :
	event.display = display.visible;
	break;
	case "Off" : 
	event.display = display.noPrint;
	break;
	default: 
	//can't think of anything to put here, but it doesn't work without at least a comment.
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>HaulAways.4:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:HaulAways.4:Calculate ***********/
switch (this.getField("HaulAway.4").value) {
	case "Yes" :
	event.display = display.visible;
	break;
	case "Off" : 
	event.display = display.noPrint;
	break;
	default: 
	//can't think of anything to put here, but it doesn't work without at least a comment.
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>HaulAways.5:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:HaulAways.5:Calculate ***********/
switch (this.getField("HaulAway.5").value) {
	case "Yes" :
	event.display = display.visible;
	break;
	case "Off" : 
	event.display = display.noPrint;
	break;
	default: 
	//can't think of anything to put here, but it doesn't work without at least a comment.
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>HaulLabel.0:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:HaulLabel.0:Calculate ***********/
switch (this.getField("HaulAway.0").value) {
	case "Yes" :
	this.getField("HaulLabel.0").display = display.visible;
	break;
	case "Off" : 
	this.getField("HaulLabel.0").display = display.hidden;
	break;
	default: 
	//can't think of anything to put here, but it doesn't work without at least a comment.
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>HaulLabel.1:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:HaulLabel.1:Calculate ***********/
switch (this.getField("HaulAway.1").value) {
	case "Yes" :
	this.getField("HaulLabel.1").display = display.visible;
	break;
	case "Off" : 
	this.getField("HaulLabel.1").display = display.hidden;
	break;
	default: 
	//can't think of anything to put here, but it doesn't work without at least a comment.
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>HaulLabel.2:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:HaulLabel.2:Calculate ***********/
switch (this.getField("HaulAway.2").value) {
	case "Yes" :
	this.getField("HaulLabel.2").display = display.visible;
	break;
	case "Off" : 
	this.getField("HaulLabel.2").display = display.hidden;
	break;
	default: 
	//can't think of anything to put here, but it doesn't work without at least a comment.
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>HaulLabel.3:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:HaulLabel.3:Calculate ***********/
switch (this.getField("HaulAway.3").value) {
	case "Yes" :
	this.getField("HaulLabel.3").display = display.visible;
	break;
	case "Off" : 
	this.getField("HaulLabel.3").display = display.hidden;
	break;
	default: 
	//can't think of anything to put here, but it doesn't work without at least a comment.
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>HaulLabel.4:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:HaulLabel.4:Calculate ***********/
switch (this.getField("HaulAway.4").value) {
	case "Yes" :
	this.getField("HaulLabel.4").display = display.visible;
	break;
	case "Off" : 
	this.getField("HaulLabel.4").display = display.hidden;
	break;
	default: 
	//can't think of anything to put here, but it doesn't work without at least a comment.
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>HaulLabel.5:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:HaulLabel.5:Calculate ***********/
switch (this.getField("HaulAway.5").value) {
	case "Yes" :
	this.getField("HaulLabel.5").display = display.visible;
	break;
	case "Off" : 
	this.getField("HaulLabel.5").display = display.hidden;
	break;
	default: 
	//can't think of anything to put here, but it doesn't work without at least a comment.
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Haulaway.0:Annot2:MouseUp:Action3</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Haulaway.0:Annot2:MouseUp:Action3 ***********/
this.getField("HaulAways.0").value = 1;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Haulaway.1:Annot2:MouseUp:Action3</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Haulaway.1:Annot2:MouseUp:Action3 ***********/

this.getField("HaulAways.1").value = 1;

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Haulaway.2:Annot2:MouseUp:Action3</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Haulaway.2:Annot2:MouseUp:Action3 ***********/
this.getField("HaulAways.2").value = 1;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Haulaway.3:Annot2:MouseUp:Action3</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Haulaway.3:Annot2:MouseUp:Action3 ***********/
this.getField("HaulAways.3").value = 1;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Haulaway.4:Annot2:MouseUp:Action3</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Haulaway.4:Annot2:MouseUp:Action3 ***********/
this.getField("HaulAways.4").value = 1;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Haulaway.5:Annot2:MouseUp:Action3</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Haulaway.5:Annot2:MouseUp:Action3 ***********/
this.getField("HaulAways.5").value = 1;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>NoAccessories.0:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:NoAccessories.0:Annot1:MouseUp:Action1 ***********/
	this.getField("R4WCheck.0").value="Off";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>NoAccessories.0:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:NoAccessories.0:Annot1:MouseUp:Action2 ***********/
	this.getField("R3WCheck.0").value="Off";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>NoAccessories.0:Annot1:MouseUp:Action3</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:NoAccessories.0:Annot1:MouseUp:Action3 ***********/
	this.getField("RGasCheck.0").value="Off";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>NoAccessories.0:Annot1:MouseUp:Action4</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:NoAccessories.0:Annot1:MouseUp:Action4 ***********/
	this.getField("D4WCheck.0").value="Off";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>NoAccessories.0:Annot1:MouseUp:Action5</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:NoAccessories.0:Annot1:MouseUp:Action5 ***********/
	this.getField("D3WCheck.0").value="Off";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>NoAccessories.0:Annot1:MouseUp:Action6</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:NoAccessories.0:Annot1:MouseUp:Action6 ***********/
	this.getField("DVentCheck.0").value="Off";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>NoAccessories.0:Annot1:MouseUp:Action7</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:NoAccessories.0:Annot1:MouseUp:Action7 ***********/
	this.getField("DGasCheck.0").value="Off";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>NoAccessories.0:Annot1:MouseUp:Action8</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:NoAccessories.0:Annot1:MouseUp:Action8 ***********/
	this.getField("WashLineCheck.0").value="Off";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>NoAccessories.0:Annot1:MouseUp:Action9</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:NoAccessories.0:Annot1:MouseUp:Action9 ***********/
	this.getField("RefLineCheck.0").value="Off";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>NoAccessories.0:Annot1:MouseUp:Action10</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:NoAccessories.0:Annot1:MouseUp:Action10 ***********/
	this.getField("DishPowerCheck.0").value="Off";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>NoAccessories.0:Annot1:MouseUp:Action11</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:NoAccessories.0:Annot1:MouseUp:Action11 ***********/
	this.getField("DishHoseCheck.0").value="Off";
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>NoAccessories.0:Annot1:MouseUp:Action12</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:NoAccessories.0:Annot1:MouseUp:Action12 ***********/

var accTotal = null;
switch (this.getField("NoAccessories.0").value) {
	case "Yes" :
	this.getField("Accessories.0").value = "";
	break;
	case "Off" : 
	
	break;
	default: 
    event.value = "Off";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>NoAccessories.1:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:NoAccessories.1:Annot1:MouseUp:Action1 ***********/
	this.getField("R4WCheck.1").value="Off";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>NoAccessories.1:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:NoAccessories.1:Annot1:MouseUp:Action2 ***********/
	this.getField("R3WCheck.1").value="Off";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>NoAccessories.1:Annot1:MouseUp:Action3</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:NoAccessories.1:Annot1:MouseUp:Action3 ***********/
	this.getField("RGasCheck.1").value="Off";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>NoAccessories.1:Annot1:MouseUp:Action4</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:NoAccessories.1:Annot1:MouseUp:Action4 ***********/
	this.getField("D4WCheck.1").value="Off";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>NoAccessories.1:Annot1:MouseUp:Action5</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:NoAccessories.1:Annot1:MouseUp:Action5 ***********/
	this.getField("D3WCheck.1").value="Off";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>NoAccessories.1:Annot1:MouseUp:Action6</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:NoAccessories.1:Annot1:MouseUp:Action6 ***********/
	this.getField("DVentCheck.1").value="Off";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>NoAccessories.1:Annot1:MouseUp:Action7</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:NoAccessories.1:Annot1:MouseUp:Action7 ***********/
	this.getField("DGasCheck.1").value="Off";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>NoAccessories.1:Annot1:MouseUp:Action8</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:NoAccessories.1:Annot1:MouseUp:Action8 ***********/
	this.getField("WashLineCheck.1").value="Off";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>NoAccessories.1:Annot1:MouseUp:Action9</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:NoAccessories.1:Annot1:MouseUp:Action9 ***********/
	this.getField("RefLineCheck.1").value="Off";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>NoAccessories.1:Annot1:MouseUp:Action10</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:NoAccessories.1:Annot1:MouseUp:Action10 ***********/
	this.getField("DishPowerCheck.1").value="Off";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>NoAccessories.1:Annot1:MouseUp:Action11</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:NoAccessories.1:Annot1:MouseUp:Action11 ***********/
	this.getField("DishHoseCheck.1").value="Off";
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>NoAccessories.1:Annot1:MouseUp:Action12</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:NoAccessories.1:Annot1:MouseUp:Action12 ***********/

var accTotal = null;
switch (this.getField("NoAccessories.1").value) {
	case "Yes" :
	this.getField("Accessories.1").value = "";
	break;
	case "Off" : 
	
	break;
	default: 
    event.value = "Off";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>NoAccessories.2:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:NoAccessories.2:Annot1:MouseUp:Action1 ***********/
	this.getField("R4WCheck.2").value="Off";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>NoAccessories.2:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:NoAccessories.2:Annot1:MouseUp:Action2 ***********/
	this.getField("R3WCheck.2").value="Off";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>NoAccessories.2:Annot1:MouseUp:Action3</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:NoAccessories.2:Annot1:MouseUp:Action3 ***********/
	this.getField("RGasCheck.2").value="Off";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>NoAccessories.2:Annot1:MouseUp:Action4</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:NoAccessories.2:Annot1:MouseUp:Action4 ***********/
	this.getField("D4WCheck.2").value="Off";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>NoAccessories.2:Annot1:MouseUp:Action5</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:NoAccessories.2:Annot1:MouseUp:Action5 ***********/
	this.getField("D3WCheck.2").value="Off";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>NoAccessories.2:Annot1:MouseUp:Action6</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:NoAccessories.2:Annot1:MouseUp:Action6 ***********/
	this.getField("DVentCheck.2").value="Off";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>NoAccessories.2:Annot1:MouseUp:Action7</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:NoAccessories.2:Annot1:MouseUp:Action7 ***********/
	this.getField("DGasCheck.2").value="Off";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>NoAccessories.2:Annot1:MouseUp:Action8</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:NoAccessories.2:Annot1:MouseUp:Action8 ***********/
	this.getField("WashLineCheck.2").value="Off";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>NoAccessories.2:Annot1:MouseUp:Action9</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:NoAccessories.2:Annot1:MouseUp:Action9 ***********/
	this.getField("RefLineCheck.2").value="Off";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>NoAccessories.2:Annot1:MouseUp:Action10</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:NoAccessories.2:Annot1:MouseUp:Action10 ***********/
	this.getField("DishPowerCheck.2").value="Off";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>NoAccessories.2:Annot1:MouseUp:Action11</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:NoAccessories.2:Annot1:MouseUp:Action11 ***********/
	this.getField("DishHoseCheck.2").value="Off";
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>NoAccessories.2:Annot1:MouseUp:Action12</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:NoAccessories.2:Annot1:MouseUp:Action12 ***********/

var accTotal = null;
switch (this.getField("NoAccessories.2").value) {
	case "Yes" :
	this.getField("Accessories.2").value = "";
	break;
	case "Off" : 
	
	break;
	default: 
    event.value = "Off";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>NoAccessories.3:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:NoAccessories.3:Annot1:MouseUp:Action1 ***********/
	this.getField("R4WCheck.3").value="Off";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>NoAccessories.3:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:NoAccessories.3:Annot1:MouseUp:Action2 ***********/
	this.getField("R3WCheck.3").value="Off";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>NoAccessories.3:Annot1:MouseUp:Action3</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:NoAccessories.3:Annot1:MouseUp:Action3 ***********/
	this.getField("RGasCheck.3").value="Off";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>NoAccessories.3:Annot1:MouseUp:Action4</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:NoAccessories.3:Annot1:MouseUp:Action4 ***********/
	this.getField("D4WCheck.3").value="Off";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>NoAccessories.3:Annot1:MouseUp:Action5</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:NoAccessories.3:Annot1:MouseUp:Action5 ***********/
	this.getField("D3WCheck.3").value="Off";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>NoAccessories.3:Annot1:MouseUp:Action6</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:NoAccessories.3:Annot1:MouseUp:Action6 ***********/
	this.getField("DVentCheck.3").value="Off";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>NoAccessories.3:Annot1:MouseUp:Action7</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:NoAccessories.3:Annot1:MouseUp:Action7 ***********/
	this.getField("DGasCheck.3").value="Off";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>NoAccessories.3:Annot1:MouseUp:Action8</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:NoAccessories.3:Annot1:MouseUp:Action8 ***********/
	this.getField("WashLineCheck.3").value="Off";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>NoAccessories.3:Annot1:MouseUp:Action9</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:NoAccessories.3:Annot1:MouseUp:Action9 ***********/
	this.getField("RefLineCheck.3").value="Off";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>NoAccessories.3:Annot1:MouseUp:Action10</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:NoAccessories.3:Annot1:MouseUp:Action10 ***********/
	this.getField("DishPowerCheck.3").value="Off";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>NoAccessories.3:Annot1:MouseUp:Action11</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:NoAccessories.3:Annot1:MouseUp:Action11 ***********/
	this.getField("DishHoseCheck.3").value="Off";
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>NoAccessories.3:Annot1:MouseUp:Action12</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:NoAccessories.3:Annot1:MouseUp:Action12 ***********/

var accTotal = null;
switch (this.getField("NoAccessories.3").value) {
	case "Yes" :
	this.getField("Accessories.3").value = "";
	break;
	case "Off" : 
	
	break;
	default: 
    event.value = "Off";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>NoAccessories.4:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:NoAccessories.4:Annot1:MouseUp:Action1 ***********/
	this.getField("R4WCheck.4").value="Off";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>NoAccessories.4:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:NoAccessories.4:Annot1:MouseUp:Action2 ***********/
	this.getField("R3WCheck.4").value="Off";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>NoAccessories.4:Annot1:MouseUp:Action3</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:NoAccessories.4:Annot1:MouseUp:Action3 ***********/
	this.getField("RGasCheck.4").value="Off";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>NoAccessories.4:Annot1:MouseUp:Action4</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:NoAccessories.4:Annot1:MouseUp:Action4 ***********/
	this.getField("D4WCheck.4").value="Off";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>NoAccessories.4:Annot1:MouseUp:Action5</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:NoAccessories.4:Annot1:MouseUp:Action5 ***********/
	this.getField("D3WCheck.4").value="Off";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>NoAccessories.4:Annot1:MouseUp:Action6</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:NoAccessories.4:Annot1:MouseUp:Action6 ***********/
	this.getField("DVentCheck.4").value="Off";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>NoAccessories.4:Annot1:MouseUp:Action7</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:NoAccessories.4:Annot1:MouseUp:Action7 ***********/
	this.getField("DGasCheck.4").value="Off";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>NoAccessories.4:Annot1:MouseUp:Action8</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:NoAccessories.4:Annot1:MouseUp:Action8 ***********/
	this.getField("WashLineCheck.4").value="Off";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>NoAccessories.4:Annot1:MouseUp:Action9</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:NoAccessories.4:Annot1:MouseUp:Action9 ***********/
	this.getField("RefLineCheck.4").value="Off";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>NoAccessories.4:Annot1:MouseUp:Action10</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:NoAccessories.4:Annot1:MouseUp:Action10 ***********/
	this.getField("DishPowerCheck.4").value="Off";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>NoAccessories.4:Annot1:MouseUp:Action11</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:NoAccessories.4:Annot1:MouseUp:Action11 ***********/
	this.getField("DishHoseCheck.4").value="Off";
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>NoAccessories.4:Annot1:MouseUp:Action12</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:NoAccessories.4:Annot1:MouseUp:Action12 ***********/

var accTotal = null;
switch (this.getField("NoAccessories.4").value) {
	case "Yes" :
	this.getField("Accessories.4").value = "";
	break;
	case "Off" : 
	
	break;
	default: 
    event.value = "Off";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>NoAccessories.5:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:NoAccessories.5:Annot1:MouseUp:Action1 ***********/
	this.getField("R4WCheck.5").value="Off";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>NoAccessories.5:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:NoAccessories.5:Annot1:MouseUp:Action2 ***********/
	this.getField("R3WCheck.5").value="Off";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>NoAccessories.5:Annot1:MouseUp:Action3</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:NoAccessories.5:Annot1:MouseUp:Action3 ***********/
	this.getField("RGasCheck.5").value="Off";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>NoAccessories.5:Annot1:MouseUp:Action4</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:NoAccessories.5:Annot1:MouseUp:Action4 ***********/
	this.getField("D4WCheck.5").value="Off";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>NoAccessories.5:Annot1:MouseUp:Action5</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:NoAccessories.5:Annot1:MouseUp:Action5 ***********/
	this.getField("D3WCheck.5").value="Off";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>NoAccessories.5:Annot1:MouseUp:Action6</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:NoAccessories.5:Annot1:MouseUp:Action6 ***********/
	this.getField("DVentCheck.5").value="Off";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>NoAccessories.5:Annot1:MouseUp:Action7</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:NoAccessories.5:Annot1:MouseUp:Action7 ***********/
	this.getField("DGasCheck.5").value="Off";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>NoAccessories.5:Annot1:MouseUp:Action8</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:NoAccessories.5:Annot1:MouseUp:Action8 ***********/
	this.getField("WashLineCheck.5").value="Off";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>NoAccessories.5:Annot1:MouseUp:Action9</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:NoAccessories.5:Annot1:MouseUp:Action9 ***********/
	this.getField("RefLineCheck.5").value="Off";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>NoAccessories.5:Annot1:MouseUp:Action10</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:NoAccessories.5:Annot1:MouseUp:Action10 ***********/
	this.getField("DishPowerCheck.5").value="Off";

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>NoAccessories.5:Annot1:MouseUp:Action11</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:NoAccessories.5:Annot1:MouseUp:Action11 ***********/
	this.getField("DishHoseCheck.5").value="Off";
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>NoAccessories.5:Annot1:MouseUp:Action12</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:NoAccessories.5:Annot1:MouseUp:Action12 ***********/

var accTotal = null;
switch (this.getField("NoAccessories.5").value) {
	case "Yes" :
	this.getField("Accessories.5").value = "";
	break;
	case "Off" : 
	
	break;
	default: 
    event.value = "Off";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>R3W.0:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:R3W.0:Calculate ***********/
switch (this.getField("R3WCheck.0").value) {
	case "Yes" :
	this.getField("R3W.0").display = display.visible;
	break;
	case "Off" : 
	this.getField("R3W.0").display = display.noPrint;
	break;
	default: 
	//this.getField("R3W") = display.noPrint;
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>R3W.1:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:R3W.1:Calculate ***********/
switch (this.getField("R3WCheck.1").value) {
	case "Yes" :
	this.getField("R3W.1").display = display.visible;
	break;
	case "Off" : 
	this.getField("R3W.1").display = display.noPrint;
	break;
	default: 
	//this.getField("R3W") = display.noPrint;
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>R3W.2:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:R3W.2:Calculate ***********/
switch (this.getField("R3WCheck.2").value) {
	case "Yes" :
	this.getField("R3W.2").display = display.visible;
	break;
	case "Off" : 
	this.getField("R3W.2").display = display.noPrint;
	break;
	default: 
	//this.getField("R3W") = display.noPrint;
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>R3W.3:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:R3W.3:Calculate ***********/
switch (this.getField("R3WCheck.3").value) {
	case "Yes" :
	this.getField("R3W.3").display = display.visible;
	break;
	case "Off" : 
	this.getField("R3W.3").display = display.noPrint;
	break;
	default: 
	//this.getField("R3W") = display.noPrint;
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>R3W.4:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:R3W.4:Calculate ***********/
switch (this.getField("R3WCheck.4").value) {
	case "Yes" :
	this.getField("R3W.4").display = display.visible;
	break;
	case "Off" : 
	this.getField("R3W.4").display = display.noPrint;
	break;
	default: 
	//this.getField("R3W") = display.noPrint;
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>R3W.5:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:R3W.5:Calculate ***********/
switch (this.getField("R3WCheck.5").value) {
	case "Yes" :
	this.getField("R3W.5").display = display.visible;
	break;
	case "Off" : 
	this.getField("R3W.5").display = display.noPrint;
	break;
	default: 
	//this.getField("R3W") = display.noPrint;
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>R4W.0:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:R4W.0:Calculate ***********/
switch (this.getField("R4WCheck.0").value) {
	case "Yes" :
	this.getField("R4W.0").display = display.visible;
	break;
	case "Off" : 
	this.getField("R4W.0").display = display.noPrint;
	break;
	default: 
	//this.getField("R4W") = display.noPrint;
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>R4W.1:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:R4W.1:Calculate ***********/
switch (this.getField("R4WCheck.1").value) {
	case "Yes" :
	this.getField("R4W.1").display = display.visible;
	break;
	case "Off" : 
	this.getField("R4W.1").display = display.noPrint;
	break;
	default: 
	//this.getField("R4W") = display.noPrint;
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>R4W.2:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:R4W.2:Calculate ***********/
switch (this.getField("R4WCheck.2").value) {
	case "Yes" :
	this.getField("R4W.2").display = display.visible;
	break;
	case "Off" : 
	this.getField("R4W.2").display = display.noPrint;
	break;
	default: 
	//this.getField("R4W") = display.noPrint;
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>R4W.3:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:R4W.3:Calculate ***********/
switch (this.getField("R4WCheck.3").value) {
	case "Yes" :
	this.getField("R4W.3").display = display.visible;
	break;
	case "Off" : 
	this.getField("R4W.3").display = display.noPrint;
	break;
	default: 
	//this.getField("R4W") = display.noPrint;
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>R4W.4:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:R4W.4:Calculate ***********/
switch (this.getField("R4WCheck.4").value) {
	case "Yes" :
	this.getField("R4W.4").display = display.visible;
	break;
	case "Off" : 
	this.getField("R4W.4").display = display.noPrint;
	break;
	default: 
	//this.getField("R4W") = display.noPrint;
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>R4W.5:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:R4W.5:Calculate ***********/
switch (this.getField("R4WCheck.5").value) {
	case "Yes" :
	this.getField("R4W.5").display = display.visible;
	break;
	case "Off" : 
	this.getField("R4W.5").display = display.noPrint;
	break;
	default: 
	//this.getField("R4W") = display.noPrint;
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>RGas.0:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:RGas.0:Calculate ***********/
switch (this.getField("RGasCheck.0").value) {
	case "Yes" :
	this.getField("RGas.0").display = display.visible;
	break;
	case "Off" : 
	this.getField("RGas.0").display = display.noPrint;
	break;
	default: 
	//this.getField("RGas") = display.noPrint;
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>RGas.1:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:RGas.1:Calculate ***********/
switch (this.getField("RGasCheck.1").value) {
	case "Yes" :
	this.getField("RGas.1").display = display.visible;
	break;
	case "Off" : 
	this.getField("RGas.1").display = display.noPrint;
	break;
	default: 
	//this.getField("RGas") = display.noPrint;
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>RGas.2:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:RGas.2:Calculate ***********/
switch (this.getField("RGasCheck.2").value) {
	case "Yes" :
	this.getField("RGas.2").display = display.visible;
	break;
	case "Off" : 
	this.getField("RGas.2").display = display.noPrint;
	break;
	default: 
	//this.getField("RGas") = display.noPrint;
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>RGas.3:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:RGas.3:Calculate ***********/
switch (this.getField("RGasCheck.3").value) {
	case "Yes" :
	this.getField("RGas.3").display = display.visible;
	break;
	case "Off" : 
	this.getField("RGas.3").display = display.noPrint;
	break;
	default: 
	//this.getField("RGas") = display.noPrint;
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>RGas.4:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:RGas.4:Calculate ***********/
switch (this.getField("RGasCheck.4").value) {
	case "Yes" :
	this.getField("RGas.4").display = display.visible;
	break;
	case "Off" : 
	this.getField("RGas.4").display = display.noPrint;
	break;
	default: 
	//this.getField("RGas") = display.noPrint;
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>RGas.5:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:RGas.5:Calculate ***********/
switch (this.getField("RGasCheck.5").value) {
	case "Yes" :
	this.getField("RGas.5").display = display.visible;
	break;
	case "Off" : 
	this.getField("RGas.5").display = display.noPrint;
	break;
	default: 
	//this.getField("RGas") = display.noPrint;
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>RefLine.0:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:RefLine.0:Calculate ***********/
switch (this.getField("RefLineCheck.0").value) {
	case "Yes" :
	this.getField("RefLine.0").display = display.visible;
	break;
	case "Off" : 
	this.getField("RefLine.0").display = display.noPrint;
	break;
	default: 
	//this.getField("RefLine") = display.noPrint;
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>RefLine.1:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:RefLine.1:Calculate ***********/
switch (this.getField("RefLineCheck.1").value) {
	case "Yes" :
	this.getField("RefLine.1").display = display.visible;
	break;
	case "Off" : 
	this.getField("RefLine.1").display = display.noPrint;
	break;
	default: 
	//this.getField("RefLine") = display.noPrint;
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>RefLine.2:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:RefLine.2:Calculate ***********/
switch (this.getField("RefLineCheck.2").value) {
	case "Yes" :
	this.getField("RefLine.2").display = display.visible;
	break;
	case "Off" : 
	this.getField("RefLine.2").display = display.noPrint;
	break;
	default: 
	//this.getField("RefLine") = display.noPrint;
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>RefLine.3:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:RefLine.3:Calculate ***********/
switch (this.getField("RefLineCheck.3").value) {
	case "Yes" :
	this.getField("RefLine.3").display = display.visible;
	break;
	case "Off" : 
	this.getField("RefLine.3").display = display.noPrint;
	break;
	default: 
	//this.getField("RefLine") = display.noPrint;
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>RefLine.4:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:RefLine.4:Calculate ***********/
switch (this.getField("RefLineCheck.4").value) {
	case "Yes" :
	this.getField("RefLine.4").display = display.visible;
	break;
	case "Off" : 
	this.getField("RefLine.4").display = display.noPrint;
	break;
	default: 
	//this.getField("RefLine") = display.noPrint;
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>RefLine.5:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:RefLine.5:Calculate ***********/
switch (this.getField("RefLineCheck.5").value) {
	case "Yes" :
	this.getField("RefLine.5").display = display.visible;
	break;
	case "Off" : 
	this.getField("RefLine.5").display = display.noPrint;
	break;
	default: 
	//this.getField("RefLine") = display.noPrint;
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Salescheck.0:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Salescheck.0:Calculate ***********/
event.value=this.getField("SalesCheck.0").value;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Salescheck.1:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Salescheck.1:Calculate ***********/
event.value=this.getField("SalesCheck.1").value;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Salescheck.2:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Salescheck.2:Calculate ***********/
event.value=this.getField("SalesCheck.2").value;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Salescheck.3:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Salescheck.3:Calculate ***********/
event.value=this.getField("SalesCheck.3").value;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Salescheck.4:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Salescheck.4:Calculate ***********/
event.value=this.getField("SalesCheck.4").value;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Salescheck.5:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Salescheck.5:Calculate ***********/
event.value=this.getField("SalesCheck.5").value;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Salescheck.8:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Salescheck.8:Calculate ***********/
event.value=this.getField("ReturnExchange Salescheck.r0").value;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Salescheck.9:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Salescheck.9:Calculate ***********/
event.value=this.getField("ReturnExchange Salescheck.r1").value;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>WashLine.0:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:WashLine.0:Calculate ***********/
switch (this.getField("WashLineCheck.0").value) {
	case "Yes" :
	this.getField("WashLine.0").display = display.visible;
	break;
	case "Off" : 
	this.getField("WashLine.0").display = display.noPrint;
	break;
	default: 
	//this.getField("WashLine") = display.noPrint;
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>WashLine.1:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:WashLine.1:Calculate ***********/
switch (this.getField("WashLineCheck.1").value) {
	case "Yes" :
	this.getField("WashLine.1").display = display.visible;
	break;
	case "Off" : 
	this.getField("WashLine.1").display = display.noPrint;
	break;
	default: 
	//this.getField("WashLine") = display.noPrint;
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>WashLine.2:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:WashLine.2:Calculate ***********/
switch (this.getField("WashLineCheck.2").value) {
	case "Yes" :
	this.getField("WashLine.2").display = display.visible;
	break;
	case "Off" : 
	this.getField("WashLine.2").display = display.noPrint;
	break;
	default: 
	//this.getField("WashLine.2") = display.noPrint;
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>WashLine.3:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:WashLine.3:Calculate ***********/
switch (this.getField("WashLineCheck.3").value) {
	case "Yes" :
	this.getField("WashLine.3").display = display.visible;
	break;
	case "Off" : 
	this.getField("WashLine.3").display = display.noPrint;
	break;
	default: 
	//this.getField("WashLine") = display.noPrint;
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>WashLine.4:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:WashLine.4:Calculate ***********/
switch (this.getField("WashLineCheck.4").value) {
	case "Yes" :
	this.getField("WashLine.4").display = display.visible;
	break;
	case "Off" : 
	this.getField("WashLine.4").display = display.noPrint;
	break;
	default: 
	//this.getField("WashLine") = display.noPrint;
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>WashLine.5:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:WashLine.5:Calculate ***********/
switch (this.getField("WashLineCheck.5").value) {
	case "Yes" :
	this.getField("WashLine.5").display = display.visible;
	break;
	case "Off" : 
	this.getField("WashLine.5").display = display.noPrint;
	break;
	default: 
	//this.getField("WashLine") = display.noPrint;
}
//</ACRO_script>
//</AcroForm>


