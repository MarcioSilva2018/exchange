/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
  

    
    var gbp, usd, eur;
function init()
{

    gbp = document.getElementById("GBP");
    usd = document.getElementById("USD");
    eur = document.getElementById("EUR");
  
}
    
    
    
    
    
    function Currency(){
		y = document.getElementById("converter").value;
		return y;
	}
 
function Calculate(){
	y = Currency();
 
	x = document.getElementById("value1").value;
 
	if(x == ""){
		document.getElementById("value2").value = "";
	}else{
		switch(y){
			case "Dollar":
				document.getElementById("value2").value = x * gbd;
			break;
 
			case "Pound":
				document.getElementById("value2").value = x * usd;
			break;
 
			case "Euro":
				document.getElementById("value2").value = x * eur;
			break;
 
		}
	}
}
  function Calculate1()
var http = newXMLHttpRequest();
const url= 'http://www.apilayer.net/api/live?access_key=295fa4ae6b0ad82f2deec9e1a75a6eda';
http.open("GET", url);
http.send();

};
