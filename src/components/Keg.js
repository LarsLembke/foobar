//Kegs

export default function Kegs(props){

    // console.log(props.level / 13.888888889)


    const indicatorAngle = props.level / 13.8888889;

    const indicatorLevel = {
        transformOrigin: "center 95%",
        transform: `rotate(${indicatorAngle}deg)`
    }

    return <article className="keg">
        <figure className="niveauindikator">
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  viewBox="0 0 506.9 275.6" id="indicators">
  <defs>

    <radialGradient id="radial-gradient" cx="126.99" cy="133.62" fx="423.876395132809" fy="409.59860994237175" r="405.34" gradientTransform="translate(0 16) scale(1 0.88)" gradientUnits="userSpaceOnUse">
      <stop offset="0.45" stop-color="#68bd96"/>
      <stop offset="0.47" stop-color="#67ba95"/>
      <stop offset="0.48" stop-color="#62b092"/>
      <stop offset="0.5" stop-color="#5ba08d"/>
      <stop offset="0.51" stop-color="#518886"/>
      <stop offset="0.53" stop-color="#446a7d"/>
      <stop offset="0.54" stop-color="#344672"/>
      <stop offset="0.55" stop-color="#292d6b"/>
      <stop offset="0.56" stop-color="#272964"/>
      <stop offset="0.58" stop-color="#221f52"/>
      <stop offset="0.6" stop-color="#190f35"/>
    </radialGradient>
    <radialGradient id="radial-gradient-2" cx="-127.36" cy="133.62" fx="169.5208631017082" fy="409.59860957710015" r="405.34" gradientTransform="matrix(-1.01, 0, 0, 0.88, 250.83, 15.97)" xlinkHref="#radial-gradient"/>
    <radialGradient id="radial-gradient-3" cx="156.19" cy="169.19" fx="356.9906654219287" fy="368.2653566387156" r="349.83" gradientTransform="translate(0 0.2)" gradientUnits="userSpaceOnUse">
      <stop offset="0.48" stop-color="#fff"/>
      <stop offset="0.49" stop-color="#fcfefd"/>
      <stop offset="0.5" stop-color="#f3faf7"/>
      <stop offset="0.5" stop-color="#e4f3ed"/>
      <stop offset="0.51" stop-color="#cfeade"/>
      <stop offset="0.51" stop-color="#b4decb"/>
      <stop offset="0.52" stop-color="#92cfb3"/>
      <stop offset="0.52" stop-color="#6bbe98"/>
      <stop offset="0.52" stop-color="#68bd96"/>
      <stop offset="0.53" stop-color="#559f91"/>
      <stop offset="0.54" stop-color="#44838d"/>
    </radialGradient>
    <radialGradient id="radial-gradient-4" cx="-38.11" cy="169.14" fx="162.68531488051465" fy="368.2153129080633" r="349.84" gradientTransform="matrix(-1, 0, 0, 1, 311.1, 0.25)" xlinkHref="#radial-gradient-3"/>
  </defs>
  <g id="Layer_1" data-name="Layer 1">
    <path class="cls-1" d="M253,265.7l172.9-.3C425.8,168.3,347.8,88.5,253,88.5S80.3,168.3,80.1,265.3Z"/>
    <path class="cls-2" d="M252.6,89c95.5,0,172.7,78.9,172.7,176.4h78.9C504.2,119.7,391.6,1.8,252.6,1.8"/>
    <path class="cls-3" d="M252.6,89C157.3,89,80.1,167.9,80.1,265.4H1.4C1.4,119.7,113.7,1.9,252.6,1.9"/>
    <path class="cls-4" d="M252.6,89c96,0,173.7,78.9,173.7,176.4h79.3c0-145.7-113.2-263.6-253-263.6"/>
    <line class="cls-5" x1="79.6" y1="259.2" x2="60.2" y2="258.9"/>
    <path class="cls-6" d="M252.5,73.4a184.6,184.6,0,0,0-21,1.3,203.7,203.7,0,0,0-85.7,30.4,192.7,192.7,0,0,0-52.4,49.5c-28.2,40.1-31.9,80.6-32.9,93.7a143.7,143.7,0,0,0-.6,16.1H79.6a172.5,172.5,0,0,1,8.2-54,163.5,163.5,0,0,1,13.5-31.2,181.3,181.3,0,0,1,51.9-59,176.7,176.7,0,0,1,61.1-27.1,181.2,181.2,0,0,1,38.2-4.8Z"/>
    <path class="cls-7" d="M252.9,73.3c5.2.1,12.5.4,21,1.4,46.9,5.4,79.2,26,85.7,30.3a194.5,194.5,0,0,1,51.3,50.1c9.3,13.4,30.2,46.9,34,93.1.5,6.7.6,12.3.6,16.1H425.8a172.5,172.5,0,0,0-8.2-54,184.8,184.8,0,0,0-13.5-31.2,182.6,182.6,0,0,0-51.9-59A178.7,178.7,0,0,0,291.1,93a173.1,173.1,0,0,0-38.2-4.7Z"/>
    <line class="cls-5" x1="80" y1="253.1" x2="60.4" y2="252"/>
    <line class="cls-5" x1="80.3" y1="250.2" x2="55.3" y2="248.5"/>
    <line class="cls-5" x1="80.5" y1="247.4" x2="60.8" y2="245.7"/>
    <path class="cls-5" d="M54.5,264.3c0-108.5,88.6-196.2,198.1-196.2"/>
    <line class="cls-5" x1="80.6" y1="244.6" x2="61.1" y2="242.6"/>
    <line class="cls-5" x1="81.1" y1="242" x2="61.3" y2="239.5"/>
    <line class="cls-5" x1="81.3" y1="239.5" x2="61.8" y2="236.4"/>
    <line class="cls-5" x1="81.7" y1="236.8" x2="57.1" y2="232.2"/>
    <line class="cls-5" x1="82.1" y1="234.3" x2="62.8" y2="230.4"/>
    <line class="cls-5" x1="82.6" y1="231.5" x2="63.2" y2="227.4"/>
    <line class="cls-5" x1="83.1" y1="228.9" x2="63.9" y2="224.4"/>
    <line class="cls-5" x1="83.4" y1="226.2" x2="64.5" y2="221.2"/>
    <line class="cls-5" x1="84.3" y1="223.6" x2="60.5" y2="216.7"/>
    <line class="cls-5" x1="85" y1="220.9" x2="66.1" y2="215.2"/>
    <line class="cls-5" x1="85.7" y1="218.1" x2="66.8" y2="212.3"/>
    <line class="cls-5" x1="86.5" y1="215.6" x2="67.8" y2="209.3"/>
    <line class="cls-5" x1="87.3" y1="212.7" x2="68.7" y2="206.2"/>
    <line class="cls-5" x1="88" y1="210.1" x2="65" y2="201.6"/>
    <line class="cls-5" x1="88.9" y1="207.4" x2="70.5" y2="200.2"/>
    <line class="cls-5" x1="89.8" y1="204.8" x2="71.5" y2="197.3"/>
    <line class="cls-5" x1="90.8" y1="202.3" x2="72.7" y2="194.5"/>
    <line class="cls-5" x1="91.8" y1="199.5" x2="73.9" y2="191.5"/>
    <line class="cls-5" x1="93" y1="196.8" x2="70.7" y2="186.5"/>
    <line class="cls-5" x1="94.1" y1="194.2" x2="76.3" y2="185.6"/>
    <line class="cls-5" x1="95.2" y1="191.7" x2="77.7" y2="182.8"/>
    <line class="cls-5" x1="96.4" y1="189.3" x2="79" y2="180.1"/>
    <line class="cls-5" x1="97.5" y1="186.9" x2="80.4" y2="177.5"/>
    <line class="cls-5" x1="98.7" y1="184.6" x2="77.7" y2="172.3"/>
    <line class="cls-5" x1="100.1" y1="181.9" x2="82.9" y2="171.7"/>
    <line class="cls-5" x1="101.3" y1="179.5" x2="84.6" y2="169.1"/>
    <line class="cls-5" x1="102.8" y1="177.2" x2="86" y2="166.5"/>
    <line class="cls-5" x1="103.9" y1="174.9" x2="87.7" y2="164.1"/>
    <line class="cls-5" x1="105.4" y1="172.5" x2="85.6" y2="158.8"/>
    <line class="cls-5" x1="106.9" y1="170.3" x2="91.3" y2="159.1"/>
    <line class="cls-5" x1="108.2" y1="168.1" x2="93" y2="156.5"/>
    <line class="cls-5" x1="109.7" y1="165.9" x2="94.7" y2="154.2"/>
    <line class="cls-5" x1="111.2" y1="163.9" x2="96.3" y2="152"/>
    <line class="cls-5" x1="112.7" y1="161.6" x2="94.3" y2="146.6"/>
    <line class="cls-5" x1="114.4" y1="159.3" x2="99.5" y2="147.2"/>
    <line class="cls-5" x1="115.9" y1="157.2" x2="101.3" y2="144.7"/>
    <line class="cls-5" x1="117.5" y1="155.1" x2="103.1" y2="142.6"/>
    <line class="cls-5" x1="119" y1="153.1" x2="104.9" y2="140.5"/>
    <line class="cls-5" x1="120.6" y1="151.4" x2="103.5" y2="135.1"/>
    <line class="cls-5" x1="122.2" y1="149.6" x2="109" y2="136.1"/>
    <line class="cls-5" x1="123.9" y1="147.6" x2="111.2" y2="134"/>
    <line class="cls-5" x1="125.7" y1="145.5" x2="113.2" y2="131.9"/>
    <line class="cls-5" x1="127.7" y1="143.5" x2="115.6" y2="129.6"/>
    <line class="cls-5" x1="129.4" y1="141.5" x2="114.6" y2="123.8"/>
    <line class="cls-5" x1="131.4" y1="139.6" x2="119.8" y2="125.5"/>
    <line class="cls-5" x1="133.2" y1="137.4" x2="122.1" y2="123.5"/>
    <line class="cls-5" x1="135.1" y1="135.7" x2="124.3" y2="121.5"/>
    <line class="cls-5" x1="137" y1="133.9" x2="126.5" y2="119.6"/>
    <line class="cls-5" x1="138.9" y1="132.1" x2="125.9" y2="113.6"/>
    <line class="cls-5" x1="141.1" y1="130.4" x2="130.8" y2="115.3"/>
    <line class="cls-5" x1="143.2" y1="128.5" x2="133.2" y2="113.5"/>
    <line class="cls-5" x1="145.5" y1="126.6" x2="135.8" y2="112.2"/>
    <line class="cls-5" x1="147.6" y1="124.8" x2="138.1" y2="110.3"/>
    <line class="cls-5" x1="149.6" y1="123.4" x2="137.9" y2="104.1"/>
    <line class="cls-5" x1="151.8" y1="121.7" x2="143.1" y2="106.6"/>
    <line class="cls-5" x1="154.1" y1="120" x2="145.8" y2="105.1"/>
    <line class="cls-5" x1="156.3" y1="118.4" x2="148.4" y2="103.4"/>
    <line class="cls-5" x1="158.8" y1="116.9" x2="150.9" y2="101.9"/>
    <line class="cls-5" x1="161" y1="115.3" x2="151.2" y2="96"/>
    <line class="cls-5" x1="163.4" y1="114" x2="155.8" y2="98.7"/>
    <line class="cls-5" x1="165.8" y1="112.6" x2="158.4" y2="97.3"/>
    <line class="cls-5" x1="168.1" y1="111.1" x2="161.1" y2="96"/>
    <line class="cls-5" x1="170.6" y1="109.8" x2="163.8" y2="94.7"/>
    <line class="cls-5" x1="172.8" y1="108.6" x2="164.4" y2="88.8"/>
    <line class="cls-5" x1="175.1" y1="107.3" x2="168.8" y2="92"/>
    <line class="cls-5" x1="177.6" y1="105.9" x2="171.6" y2="90.7"/>
    <line class="cls-5" x1="180" y1="104.9" x2="174.4" y2="89.5"/>
    <line class="cls-5" x1="182.5" y1="103.8" x2="177.2" y2="88.3"/>
    <line class="cls-5" x1="184.9" y1="102.7" x2="178.5" y2="82.4"/>
    <line class="cls-5" x1="187.4" y1="101.7" x2="182.6" y2="86.2"/>
    <line class="cls-5" x1="189.9" y1="100.7" x2="185.5" y2="85.2"/>
    <line class="cls-5" x1="192.5" y1="99.7" x2="188.5" y2="84.2"/>
    <line class="cls-5" x1="195" y1="98.7" x2="191.3" y2="83.3"/>
    <line class="cls-5" x1="197.5" y1="97.9" x2="192.7" y2="77.2"/>
    <line class="cls-5" x1="200" y1="97" x2="196.4" y2="81.3"/>
    <line class="cls-5" x1="202.6" y1="96.2" x2="199.2" y2="80.5"/>
    <line class="cls-5" x1="205.2" y1="95.4" x2="202.1" y2="79.9"/>
    <line class="cls-5" x1="207.7" y1="94.7" x2="204.9" y2="79.2"/>
    <line class="cls-5" x1="210.2" y1="94.1" x2="206.8" y2="73.3"/>
    <line class="cls-5" x1="212.8" y1="93.6" x2="210.5" y2="78.1"/>
    <line class="cls-5" x1="215.3" y1="92.9" x2="213.2" y2="77.7"/>
    <line class="cls-5" x1="217.9" y1="92.3" x2="215.8" y2="77.1"/>
    <line class="cls-5" x1="220.3" y1="91.7" x2="218.5" y2="76.4"/>
    <line class="cls-5" x1="222.8" y1="91.3" x2="220.5" y2="70.9"/>
    <line class="cls-5" x1="225.2" y1="90.8" x2="223.6" y2="75.2"/>
    <line class="cls-5" x1="227.7" y1="90.4" x2="226.3" y2="74.9"/>
    <line class="cls-5" x1="230.2" y1="90.1" x2="228.8" y2="74.8"/>
    <line class="cls-5" x1="232.6" y1="89.8" x2="231.6" y2="74.7"/>
    <line class="cls-5" x1="234.9" y1="89.5" x2="233.7" y2="68.9"/>
    <line class="cls-5" x1="236.7" y1="74.1" x2="237.4" y2="89.3"/>
    <line class="cls-5" x1="239.8" y1="89.1" x2="239.2" y2="74"/>
    <line class="cls-5" x1="242.4" y1="88.8" x2="241.9" y2="73.7"/>
    <line class="cls-5" x1="244.9" y1="88.6" x2="244.3" y2="73.6"/>
    <line class="cls-5" x1="247.1" y1="88.5" x2="246.7" y2="68"/>
    <line class="cls-5" x1="249.3" y1="88.5" x2="249.1" y2="73.5"/>
    <line class="cls-5" x1="251.6" y1="88.5" x2="251.4" y2="73.4"/>
    <line class="cls-5" x1="425.9" y1="261.8" x2="445.5" y2="261.7"/>
    <line class="cls-5" x1="425.8" y1="258.8" x2="445.2" y2="258.5"/>
    <line class="cls-5" x1="425.8" y1="255.8" x2="445.4" y2="255.1"/>
    <line class="cls-5" x1="425.4" y1="252.8" x2="445" y2="251.6"/>
    <line class="cls-5" x1="425.1" y1="249.9" x2="450" y2="248.2"/>
    <line class="cls-5" x1="424.9" y1="247.1" x2="444.6" y2="245.3"/>
    <path class="cls-5" d="M450.9,264.2c0-108.4-88.7-196.1-198.3-196.1"/>
    <line class="cls-5" x1="424.7" y1="244.3" x2="444.3" y2="242.2"/>
    <line class="cls-5" x1="424.3" y1="241.6" x2="444" y2="239.2"/>
    <line class="cls-5" x1="424" y1="239.1" x2="443.5" y2="236.1"/>
    <line class="cls-5" x1="423.7" y1="236.5" x2="448.3" y2="231.9"/>
    <line class="cls-5" x1="423.2" y1="233.9" x2="442.5" y2="230.1"/>
    <line class="cls-5" x1="422.7" y1="231.2" x2="442" y2="227.1"/>
    <line class="cls-5" x1="422.1" y1="228.6" x2="441.3" y2="224.1"/>
    <line class="cls-5" x1="421.6" y1="226" x2="440.6" y2="220.9"/>
    <line class="cls-5" x1="420.9" y1="223.4" x2="444.9" y2="216.3"/>
    <line class="cls-5" x1="420.4" y1="220.5" x2="439.1" y2="214.9"/>
    <line class="cls-5" x1="419.5" y1="217.8" x2="438.2" y2="212"/>
    <line class="cls-5" x1="418.9" y1="215.2" x2="437.3" y2="209"/>
    <line class="cls-5" x1="418" y1="212.4" x2="436.5" y2="206"/>
    <line class="cls-5" x1="417.2" y1="209.9" x2="440.3" y2="201.2"/>
    <line class="cls-5" x1="416.3" y1="207.3" x2="434.4" y2="200"/>
    <line class="cls-5" x1="415.4" y1="204.6" x2="433.2" y2="197.2"/>
    <line class="cls-5" x1="414.5" y1="202.1" x2="432.1" y2="194.3"/>
    <line class="cls-5" x1="413.4" y1="199.3" x2="430.9" y2="191.4"/>
    <line class="cls-5" x1="412.2" y1="196.5" x2="434.7" y2="186.2"/>
    <line class="cls-5" x1="411.2" y1="193.8" x2="428.3" y2="185.6"/>
    <line class="cls-5" x1="410.1" y1="191.4" x2="427" y2="182.8"/>
    <line class="cls-5" x1="409" y1="188.9" x2="425.7" y2="180.1"/>
    <line class="cls-5" x1="407.9" y1="186.6" x2="424.4" y2="177.4"/>
    <line class="cls-5" x1="406.7" y1="184.3" x2="427.7" y2="172"/>
    <line class="cls-5" x1="405.3" y1="181.6" x2="421.5" y2="172"/>
    <line class="cls-5" x1="404.1" y1="179.2" x2="420.1" y2="169.4"/>
    <line class="cls-5" x1="402.6" y1="176.9" x2="418.5" y2="166.7"/>
    <line class="cls-5" x1="401.3" y1="174.7" x2="416.7" y2="164.3"/>
    <line class="cls-5" x1="400" y1="172.2" x2="419.7" y2="158.4"/>
    <line class="cls-5" x1="398.5" y1="170" x2="413.5" y2="159.1"/>
    <line class="cls-5" x1="397.1" y1="167.8" x2="411.8" y2="156.5"/>
    <line class="cls-5" x1="395.7" y1="165.6" x2="410.2" y2="154.2"/>
    <line class="cls-5" x1="394.2" y1="163.5" x2="408.5" y2="152"/>
    <line class="cls-5" x1="392.7" y1="161.3" x2="411.1" y2="146.3"/>
    <line class="cls-5" x1="391" y1="159" x2="405.3" y2="147.5"/>
    <line class="cls-5" x1="389.5" y1="156.8" x2="403.4" y2="145"/>
    <line class="cls-5" x1="387.9" y1="154.8" x2="401.4" y2="143"/>
    <line class="cls-5" x1="386.4" y1="152.7" x2="399.6" y2="140.8"/>
    <line class="cls-5" x1="384.8" y1="151" x2="401.9" y2="134.7"/>
    <line class="cls-5" x1="383.2" y1="149.2" x2="395.8" y2="136.4"/>
    <line class="cls-5" x1="381.5" y1="147.3" x2="393.7" y2="134.1"/>
    <line class="cls-5" x1="379.7" y1="145.2" x2="391.7" y2="131.9"/>
    <line class="cls-5" x1="377.8" y1="143.1" x2="389.3" y2="129.7"/>
    <line class="cls-5" x1="376" y1="141.1" x2="390.8" y2="123.5"/>
    <line class="cls-5" x1="374" y1="139.3" x2="385.1" y2="125.5"/>
    <line class="cls-5" x1="372.1" y1="137.2" x2="382.9" y2="123.5"/>
    <line class="cls-5" x1="370.3" y1="135.5" x2="380.8" y2="121.6"/>
    <line class="cls-5" x1="368.4" y1="133.7" x2="378.6" y2="119.7"/>
    <line class="cls-5" x1="366.4" y1="131.9" x2="379.5" y2="113.3"/>
    <line class="cls-5" x1="364.3" y1="130" x2="373.9" y2="115.8"/>
    <line class="cls-5" x1="362.2" y1="128.2" x2="371.5" y2="113.9"/>
    <line class="cls-5" x1="359.9" y1="126.4" x2="369.2" y2="112.2"/>
    <line class="cls-5" x1="357.7" y1="124.7" x2="366.7" y2="110.4"/>
    <line class="cls-5" x1="355.7" y1="123.1" x2="367.5" y2="103.7"/>
    <line class="cls-5" x1="353.5" y1="121.5" x2="361.9" y2="106.9"/>
    <line class="cls-5" x1="351.2" y1="119.9" x2="359.3" y2="105.1"/>
    <line class="cls-5" x1="348.9" y1="118.3" x2="356.7" y2="103.5"/>
    <line class="cls-5" x1="346.5" y1="116.7" x2="354.2" y2="101.9"/>
    <line class="cls-5" x1="344.2" y1="115.1" x2="354.2" y2="95.6"/>
    <line class="cls-5" x1="342" y1="113.8" x2="349.1" y2="99"/>
    <line class="cls-5" x1="339.6" y1="112.3" x2="346.6" y2="97.6"/>
    <line class="cls-5" x1="337.2" y1="110.9" x2="344" y2="96"/>
    <line class="cls-5" x1="334.8" y1="109.5" x2="341.4" y2="94.7"/>
    <line class="cls-5" x1="332.5" y1="108.3" x2="341" y2="88.4"/>
    <line class="cls-5" x1="330.2" y1="107.1" x2="336.3" y2="92.1"/>
    <line class="cls-5" x1="327.7" y1="105.9" x2="333.5" y2="90.9"/>
    <line class="cls-5" x1="325.3" y1="104.7" x2="330.7" y2="89.5"/>
    <line class="cls-5" x1="322.8" y1="103.6" x2="328" y2="88.3"/>
    <line class="cls-5" x1="320.3" y1="102.4" x2="326.9" y2="82"/>
    <line class="cls-5" x1="318" y1="101.5" x2="322.5" y2="86.2"/>
    <line class="cls-5" x1="315.5" y1="100.5" x2="319.8" y2="85.1"/>
    <line class="cls-5" x1="312.9" y1="99.4" x2="316.9" y2="84.1"/>
    <line class="cls-5" x1="310.4" y1="98.5" x2="314.1" y2="83"/>
    <line class="cls-5" x1="307.9" y1="97.6" x2="312.7" y2="76.9"/>
    <line class="cls-5" x1="305.3" y1="96.8" x2="308.8" y2="81.5"/>
    <line class="cls-5" x1="302.8" y1="96" x2="306" y2="80.7"/>
    <line class="cls-5" x1="300.2" y1="95.2" x2="303.1" y2="79.8"/>
    <line class="cls-5" x1="297.7" y1="94.5" x2="300.4" y2="79.1"/>
    <line class="cls-5" x1="295.2" y1="93.7" x2="298.6" y2="73"/>
    <line class="cls-5" x1="292.6" y1="93.3" x2="294.9" y2="77.8"/>
    <line class="cls-5" x1="290.1" y1="92.6" x2="292.2" y2="77.4"/>
    <line class="cls-5" x1="287.5" y1="92.1" x2="289.6" y2="76.7"/>
    <line class="cls-5" x1="285" y1="91.6" x2="286.9" y2="76.1"/>
    <line class="cls-5" x1="282.6" y1="91.1" x2="284.8" y2="70.5"/>
    <line class="cls-5" x1="280.2" y1="90.7" x2="281.7" y2="75.3"/>
    <line class="cls-5" x1="277.7" y1="90.3" x2="279.1" y2="74.6"/>
    <line class="cls-5" x1="275.2" y1="90" x2="276.5" y2="74.4"/>
    <line class="cls-5" x1="272.8" y1="89.7" x2="273.8" y2="74.3"/>
    <line class="cls-5" x1="270.5" y1="89.4" x2="271.7" y2="68.6"/>
    <line class="cls-5" x1="268" y1="89.2" x2="268.7" y2="73.7"/>
    <line class="cls-5" x1="265.6" y1="89" x2="266.2" y2="73.7"/>
    <line class="cls-5" x1="262.9" y1="88.8" x2="263.5" y2="73.3"/>
    <line class="cls-5" x1="260.5" y1="88.7" x2="261.1" y2="73.2"/>
    <line class="cls-5" x1="258.3" y1="88.6" x2="258.8" y2="68.1"/>
    <line class="cls-5" x1="256.1" y1="88.5" x2="256.3" y2="73.1"/>
    <line class="cls-5" x1="253.7" y1="88.5" x2="253.9" y2="73.2"/>
    <line class="cls-5" x1="79.6" y1="256.2" x2="60" y2="255.4"/>
    <line class="cls-5" x1="79.7" y1="259.3" x2="60" y2="258.6"/>
    <line class="cls-5" x1="79.6" y1="262.1" x2="59.9" y2="262.1"/>
  </g>
  <g id="Layer_3" data-name="Layer 3" >
    <circle class="cls-8" cx="252.5" cy="263.3" r="15"/>
    <path class="cls-2" d="M252.9,262.8c0-1.9-0.6-3.4-1.3-3.7c-91.8-1.3-206.1-2.7-207.2-1.3c-0.4,0.5-0.8,1.3-1,2.4
		c-0.1,0.8-0.1,1.6-0.1,2.4c0.1,1.3,0.5,2.4,0.9,2.9c3.4,5.3,201.9,1.6,207.3,1.3c0.8,0,1.4-1.6,1.4-3.7
		C252.9,263.1,252.9,263.1,252.9,262.8z" style={indicatorLevel}/>
  </g>
</svg>

        </figure>
        <figcaption></figcaption>
        <p>{props.beer}</p>
        <p>{props.level / 100}L of {props.capacity / 100}L</p>
    </article>
}