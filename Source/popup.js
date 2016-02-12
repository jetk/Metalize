function opt_control() {

    //localStorage.setItem("settings","null")

    var setting = localStorage.getItem("settings");

    var modeRadios = document.getElementsByName('modeRadio');
    for (var i = 0; i < modeRadios.length; i++) {
        if (modeRadios[i].value == setting)
            modeRadios[i].checked = true;
    }


    document.getElementById('setModeButton').addEventListener('click', doClose);
    
    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.method == "getStatus")
      sendResponse({status: localStorage['settings']});
    else
      sendResponse({}); // snub them.
});

    function doClose() {
        var modeVal;
        var modeRadios = document.getElementsByName('modeRadio');
        for (var i = 0; i < modeRadios.length; i++) {
            if (modeRadios[i].checked)
                modeVal = modeRadios[i].value;
        }
        localStorage.setItem("settings", modeVal)
        
        self.close();

    }
}

document.addEventListener('DOMContentLoaded', opt_control);