function simplePopup() {
			var self = this;
			var popupMask = null;
			var popupDiv = null;
			
			self.popup = function(objDiv, objDivWidth, objDivHeight) {
				if(self.popupMask == null) {
					self.popupMask = document.createElement("div");
					self.popupMask.style.width = "100%";
					self.popupMask.style.height = document.body.clientHeight + "px";
					self.popupMask.style.zIndex = "9998";
					self.popupMask.style.backgroundColor = "#000000";
					self.popupMask.style.opacity = 0.8;
					self.popupMask.style.position = "absolute";
					self.popupMask.style.top = 0;
					self.popupMask.style.left = 0;
					self.popupMask.onclick = self.dismiss;
				} else {
					self.popupMask.style.display = "block";
				}
				
				var screenWidth = window.innerWidth;
				var screenHeight = window.innerHeight;
				
				if(objDiv != null) {
					self.popupDiv = objDiv;
					self.popupDiv.style.position = "absolute";
					self.popupDiv.style.zIndex = "9999";
					document.body.appendChild(objDiv);
					
					if(objDivWidth == null) {
						objDivWidth = objDiv.clientWidth;
					}
					
					if(objDivHeight == null) {
						objDivHeight = objDiv.clientHeight;
					}
					
					var tPos = document.body.scrollTop + (screenHeight - objDivHeight) / 2;
					var lPos = (screenWidth - objDivWidth) / 2;
					self.popupDiv.style.top = tPos + "px";
					self.popupDiv.style.left = lPos + "px";
				}
				
                document.body.appendChild(self.popupMask);
				document.body.style.overflowY = "hidden";
			};
			
			self.dismiss = function(event) {
				if(self.popupMask != null) {
					self.popupMask.style.display = "none";
					document.body.removeChild(self.popupMask);
					//self.popupMask.onclick = null;
					//self.popupMask = null;
				}
				
				if(self.popupDiv != null) {
					self.popupDiv.style.display = "none";
					document.body.removeChild(self.popupDiv);
					self.popupDiv = null;
				}
				