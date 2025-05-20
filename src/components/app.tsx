import { FunctionalComponent, h } from 'preact';
import { Router } from 'preact-router';

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
                <Home path="/" />
                <AboutUs path="/about-us" />
                <Canteen path="/canteen" />
                <Membership path="/membership" />
                <ScannerFeeds path="/live-feed"/>
                <ShiftCalendar path="/shift-calendar" />
                <Stations path="/stations" />
                <NotFoundPage default />
            </Router>
            <Footer />
        </div>
    );
};

export default App;
