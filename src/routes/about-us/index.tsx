import { FunctionalComponent, h } from 'preact';
import cx from '../../lib/cx';
import style from './style.scss';

const AboutUs: FunctionalComponent = () => {
    return (
        <div class={style.about}>
            <h1>ABOUT US</h1>

            <section>
                <h2>Executive Committee</h2>
                <p>Updated January 2025</p>
                <ul>
                    <li>President - Jeremy Reigber</li>
                    <li>Vice President - Jen MacDonald</li>
                    <li>Treasurer - Dave MacDonald</li>
                    <li>Secretary - Brian Noble</li>
                    <li>Directors</li>
                    <ul>
                        <li>Linda Betsworth</li>
                        <li>Tony Coelho</li>
                        <li>Gord MacBride</li>
                    </ul>
                </ul>
            </section>

            <section>
                <h2>Club History</h2>
                <p>In 1975 a small group of fire buffs that had been meeting informally saw the need for a formal fire buffing group in the Metro Toronto area. Out of that need was born the Metro Toronto Multiple Alarm Association, officially formed on February 25, 1975. The group originally met in members’ basements. Later, the MTMAA would later benefit from the generosity of member Bruce Beauchamp’s family, setting up a meeting room above their tailor shop on Adelaide Street West. That location provided a great vantage point for watching responding apparatus from the Adelaide Street firehall.</p>
                <p>Wanting to expand their service to the community, in 1977 the members of MTMAA took over the operation of the Scarborough Fire Department canteen truck. In late 1979 members began operation of a canteen service for the Etobicoke and Mississauga Fire Departments that lasted two years until a new fire buff club, The Lakeshore Fire Buffs, started up and took over the service. Forty years later, we continue to proudly provide canteen and rehab services to the amalgamated Toronto Fire Services.</p>
                <p>The most infamous response in the club’s history began on the evening of November 10, 1979, when a Canadian Pacific freight train carrying volatile chemicals derailed near the intersection of Mavis Road and Dundas Street in Mississauga. The ensuing evacuation displaced over 200,000 residents. Members spent the next eleven days serving hot and cold drinks, snacks and meals to responding personnel, logging a total of 772 volunteer hours on scene.</p>
                <p>Through the 1980s, MTMAA moved again. Buildings come and buildings go in the big city, and we were allowed the use of the Toronto Firefighters Association meeting hall at 39 Commissioners Street. Meetings were held on the former apparatus bay of Fire Hall #30 – an old single-bay firehall active until 1980. The 1990s were interesting and turbulent times for the Fire Service in Toronto. 1998 saw the amalgamation of the Toronto Fire Department with it’s five suburban counterparts. Metro Toronto was no more, so MTMAA became GTMAA – the Greater Toronto Multiple Alarm Association. The canteen service (now called Support 7) was expanded westward from Scarborough into the new City of Toronto.</p>
                <p>Over the years, GTMAA has grown to about 40 members and twice as many subscribers. While many have moved on, new members are continuously attracted to our ideas of fellowship and inclusiveness. Our friends and alumni often walk through the door unannounced, always welcome from as far afield as the United States, Europe, and Asia.</p>
            </section>

            <section class={cx(style.section, style.group, style.trio)}>
                <img class={cx(style.col, style.span_1_of_3)} src="/assets/people/gary-and-og-buffs-pose-with-old-canteen.gif" />
                <img class={cx(style.col, style.span_1_of_3)} src="/assets/people/scarborough-photo-tour-1977.jpg" />
                <img class={cx(style.col, style.span_1_of_3)} src="/assets/people/delivery-of-old-support-7-dec-1996.jpg" />
            </section>

            <section>
                <h2>What is a Fire Buff?</h2>
                <p>In general terms, a “buff” is defined as anyone with an intense interest or passion in virtually any subject. But did you know the very origin of the word “buff” can be traced to the fire service? More than a century ago as the legend goes, civilian supporters of the New York City Fire Department were frequently seen at extra-alarm blazes regardless of time or temperature. Standing on the sidewalk watching their helmeted heroes hard at work, these well-to-do citizens were conspicuous in their (expensive) buffalo-hide robes or coats. Hence their nickname “the buffaloes” – inevitably short-formed to “buffs”.</p>
                <p>A fire buff, therefore, is a person with an all-consuming interest in the fire service. Mostly civilians, they are ardent admirers and enthusiastic supporters of all firefighters and the job they do. More than a few firefighters — professional and volunteer – are also avid fire buffs in their off-duty hours.</p>
                <p>“Fires to us are not mere spectacles” Baltimore fire buff Karl Detzer wrote many years ago. “They are demonstrations of strategy and tactics, for behind the apparent confusion at any working fire there is generalship. A real buff can tell at a glance just how the battle lines are drawn. The placement of hose lines and ladders, the use of high-pressure turrets and water towers, the location of windows being smashed with axes – all these are clues as to what kind of fire it is, where it is centred and how the job of extinguishing the blaze is progressing”</p>
                <p>Fire buffing has, in many respects, the same connotations as sports fans supporting their local teams. Fire buffs are basically eager students of the science of firefighting with a parallel interest in a host of other activities, such as compiling fire department histories; photographing apparatus, stations, and fires; building model fire engines; monitoring radio scanners; and collecting/trading patches.</p>
                <p>Courtesy Walt McCall – fire buff, author, and historian from Windsor, ON</p>
            </section>


            <section class={cx(style.section, style.group)}>
                <img class={cx(style.col, style.span_1_of_3)} src="/assets/apparatus/old-support-7-at-canada-day-parade_thumb.jpg" />
                <img class={cx(style.col, style.span_1_of_3)} src="/assets/people/firefighters-at-100-echo-point-incident_thumb.jpg" />
                <img class={cx(style.col, style.span_1_of_3)} src="/assets/people/2012-ifba-convention.jpg" />
            </section>

            <section>
                <h2>Affiliations</h2>
                <img class={style.ifbaCrest} src="/assets/ifba-crest.png" />
                <p>The GTMAA is a proud member of the <a href="https://ifba.org">International Fire Buff Associates (IFBA)</a>, an organization formed to strengthen the bond among independent groups of fire buffs. The official mission of the IFBA is “to serve as a common ground for Fire Buffs, active in promoting the general welfare of Fire Departments, allied emergency services, their officers and members.”</p>
                <p>The IFBA was founded at the International Association of Fire Chiefs convention held in Toronto in 1953. Members of the GTMAA have had the distinction of serving among the highest levels of the IFBA Executive Office and frequently attend annual IFBA conventions held across North America. Thanks to the hard work of our membership, the annual convention returned to Toronto in 2012 with the GTMAA serving as host club.</p>
            </section>
        </div>
    );
};

export default AboutUs;
