import { FunctionalComponent, h } from 'preact';
import { Route, Router } from 'preact-router';

import Home from '../routes/home';
import AboutUs from '../routes/about-us';
import Canteen from '../routes/canteen';
import Membership from '../routes/membership';
import NotFoundPage from '../routes/notfound';
import ScannerFeeds from '../routes/scanner-feeds';
import ShiftCalendar from '../routes/shift-calendar';
import Stations from '../routes/stations';
import Header from './header';
import Footer from './footer';

const App: FunctionalComponent = () => {
    return (
        <div id="preact_root">
            <Header />
            <Router>
                <Route path="/" component={Home} />
                <Route path="/about-us" component={AboutUs} />
                <Route path="/canteen" component={Canteen} />
                <Route path="/membership" component={Membership} />
                <Route path="/live-feed" component={ScannerFeeds} />
                <Route path="/shift-calendar" component={ShiftCalendar} />
                <Route path="/stations" component={Stations} />
                <NotFoundPage default />
            </Router>
            <Footer />
        </div>
    );
};

export default App;
