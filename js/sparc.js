function loginSuccess(data, status)
            {
                if(data == "0")
                  alert(data);
                else
                  $.mobile.changePage('#accountOverview');
            }
      
            function loginError(data, status)
            {
                alert("loginError");
            }
            $('#login').live('pageshow',function(event){
                //login form handler
                $("#loginForm").validate({
                submitHandler: function(form) {
                  var formData = $("#loginForm").serialize();

                  $.ajax({
                    type: "POST",
                    url: "test.php",
                    cache: false,
                    data: formData,
                    success: loginSuccess,
                    error: loginError
                  });
                }
                });
                return false;
            });

            $('#accountOverview').live('pageshow',function(event){
              //var plot1 = $.jqplot ('chart1', [[3,7,9,1,5,3,8,2,5]]);
            });
            //function called when device page is shown
            $('#devices').live('pageshow',function(event){
                //code to call webservice
                $.ajax({
                  type: 'GET',
                  url: "http://localhost:8080/com.sparc.webservice/ws/sparc/getDeviceList?callback=deviceListCallback",
                  async: false,
                  contentType: "application/json",
                  dataType: 'jsonp'
                });
            });
            //callback function specified in url above this is where you convert teh JSON into html
            function deviceListCallback(response)
            {
                //this displays the response in the chrome console, this will be replaced with code to convert
                // the json into html
               var list = '<div data-role="collapsible-set" data-collapsed-icon="arrow-r" data-expanded-icon="arrow-d" data-iconpos="right" data-content-theme="d">';
                for(i=0; i< response.deviceList.length; i++) {
                    var type = response.deviceList[i].type;
                    list += '<div data-role="collapsible" data-collapsed="true">';
                    list += '<h3>' + response.deviceList[i].name + '</h3>';
                    list += '<select data-role="slider" name="'+ response.deviceList[i].name +' id=" '+response.deviceList[i].id+'"><option value="off">Off</option><option value="on">On</option></select>';
                    list += '<p>Power Consumption: ' + response.deviceList[i].powerConsumption + '</p>';
                    if(type == "hvac") {

                    }
                    else if(type == "light") {

                    }
                    else if(type == "plug") {

                    }
                    else {

                    }
                    list += '<a href="#" data-role="button" data-inline="true">Edit</a> <a href="#" data-role="button" data-inline="true">Schedule</a>'+'</div>';
                } 
               $('div.deviceList').html(list).trigger('create');
               //note the .trigger('create') makes sure the Jquery mobiel styles are applied to dynamic content  
            }
            $('#incentives').live('pageshow',function(event){
                //code to call webservice
                $.ajax({
                  type: 'GET',
                  url: "http://localhost:8080/com.sparc.webservice/ws/sparc/getIncentiveList?callback=incentiveListCallback",
                  async: false,
                  contentType: "application/json",
                  dataType: 'jsonp'
                });
           });
          function incentiveListCallback(response)
            {
              
               $('div.incentiveList').html("incentives").trigger('create');
               //note the .trigger('create') makes sure the Jquery mobile styles are applied to dynamic content  
            }
            $('#notifications').live('pageshow',function(event){
                //code to call webservice
                $.ajax({
                  type: 'GET',
                  url: "http://localhost:8080/com.sparc.webservice/ws/sparc/getNotificationList?callback=notificationListCallback",
                  async: false,
                  contentType: "application/json",
                  dataType: 'jsonp'
                });
           });
          function notificationListCallback(response)
            {
              
               $('div.notificationList').html("incentives").trigger('create');
               //note the .trigger('create') makes sure the Jquery mobile styles are applied to dynamic content  
            }