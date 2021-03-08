import React, {memo, useState} from 'react';
import {Link} from 'react-router-dom'
import {HeaderIconsWrapper} from "./style";
import {getSheets} from "../../../../api/sheet";

const Icons = (props) => {

    const {pages} = config;

    const [sheets, setSheets] = useState([]);

    const getSheet = () => {
        sheets.length === 0 &&
        getSheets().then(res => {
            setSheets(res.content);
            console.log(res.content);
        })
    }

    return (
        <div>
            <HeaderIconsWrapper {...props} display={props.display}>
                <ul>
                    <li>
                        <Link to="/">
                            <svg t="1615032099937" className="icon" viewBox="0 0 1024 1024" version="1.1"
                                 xmlns="http://www.w3.org/2000/svg" p-id="2757" width="200" height="200">
                                <path
                                    d="M730.609415 947.718663 295.036062 947.718663c-96.983845 0-123.230626-32.30373-123.230626-132.914172L171.805436 358.406856c0-14.150278 11.472286-25.622564 25.621541-25.622564 14.149255 0 25.622564 11.472286 25.622564 25.622564l0 456.397634c0 73.262584 3.01466 81.671091 71.987544 81.671091l435.573353 0c68.959581 0 81.745792-8.408507 81.745792-81.671091L812.35623 358.406856c0-14.150278 11.471262-25.622564 25.621541-25.622564 14.148231 0 25.621541 11.472286 25.621541 25.622564l0 456.397634C863.598288 915.414933 827.592236 947.718663 730.609415 947.718663z"
                                    p-id="2758" fill="#cdcdcd"/>
                                <path
                                    d="M620.190583 934.906869c-7.081279 0-12.812817-5.741771-12.812817-12.811794L607.377766 679.001525c0-25.455765-4.880147-25.942859-33.06507-25.942859l-122.980939 0c-28.185946 0-23.306822 0.487094-23.306822 25.942859l0 243.094574c0 7.068999-5.741771 12.811794-12.81077 12.811794-7.080256 0-12.811794-5.741771-12.811794-12.811794L402.402371 679.001525c0-44.12087 11.722996-51.565423 48.929386-51.565423l122.980939 0c37.207413 0 58.688657 7.443529 58.688657 51.565423l0 243.094574C633.00033 929.165098 627.257535 934.906869 620.190583 934.906869z"
                                    p-id="2759" fill="#cdcdcd"/>
                                <path
                                    d="M90.071923 434.740382c-7.767917 0-15.449877-3.521197-20.491707-10.214642-8.506744-11.30958-6.228865-27.373441 5.067412-35.881209L497.409189 70.50375c11.30958-8.501628 27.373441-6.243191 35.880185 5.067412 8.506744 11.30958 6.243191 27.373441-5.066389 35.880185L105.461425 429.593152C100.843244 433.064206 95.439164 434.740382 90.071923 434.740382z"
                                    p-id="2760" fill="#cdcdcd"/>
                                <path
                                    d="M935.56025 434.746522c-5.367241 0-10.772344-1.676176-15.388479-5.148253L497.409189 111.457488c-11.2973-8.506744-13.574157-24.571628-5.066389-35.881209 8.520047-11.30958 24.582885-13.555737 35.880185-5.067412l422.763606 318.141804c11.30958 8.505721 13.574157 24.570605 5.065366 35.880185C951.022407 431.225325 943.34147 434.746522 935.56025 434.746522z"
                                    p-id="2761" fill="#cdcdcd"/>
                                <path
                                    d="M287.103392 550.571481c-7.080256 0-12.811794-5.736655-12.811794-12.811794L274.291598 392.035768c0-3.984754-0.587378-7.744381 2.577708-10.1645l166.923754-128.910998c5.616928-4.304026 13.05534-3.245927 17.346063 2.371 4.304026 5.616928 5.385661 13.654998-0.232291 17.959024L299.915186 398.35366 299.915186 537.76071C299.915186 544.834826 294.172391 550.571481 287.103392 550.571481z"
                                    p-id="2762" fill="#cdcdcd"/>
                                <path
                                    d="M287.103392 614.626355c-7.080256 0-12.811794-5.736655-12.811794-12.809747l0-12.812817c0-7.075139 5.730515-12.811794 12.811794-12.811794 7.068999 0 12.811794 5.735631 12.811794 12.811794l0 12.812817C299.915186 608.889701 294.172391 614.626355 287.103392 614.626355z"
                                    p-id="2763" fill="#cdcdcd"/>
                            </svg>
                        </Link>
                    </li>
                    {
                        pages.map(page => (
                            <li key={page.link}>
                                {
                                    page.target === '_blank' ? (
                                        <a href={page.link} target={page.target}>
                                            <div dangerouslySetInnerHTML={{__html: page.icon}}/>
                                        </a>
                                    ) : (
                                        <Link to={page.link} target={page.target}>
                                            <div dangerouslySetInnerHTML={{__html: page.icon}}/>
                                        </Link>
                                    )
                                }
                            </li>
                        ))
                    }
                    {
                        sheets.map(sheet => (
                            <li key={sheet.slug}>
                                <Link to={`/sheet/${sheet.slug}`} target={sheet.target}>
                                    <div dangerouslySetInnerHTML={{__html: sheet.summary}}/>
                                </Link>
                            </li>
                        ))
                    }
                    <li>
                        <div onClick={getSheet}>
                            <svg t="1615101758268" className="icon" viewBox="0 0 1037 1024" version="1.1"
                                 xmlns="http://www.w3.org/2000/svg" p-id="40842" width="200" height="200">
                                <path
                                    d="M344.323556 497.872502H126.662662A126.855186 126.855186 0 0 1 0.002338 370.237869V153.551284a126.855186 126.855186 0 0 1 126.660324-126.660323h217.660894a126.855186 126.855186 0 0 1 126.660324 126.660323V370.237869a126.855186 126.855186 0 0 1-126.660324 127.634633zM126.662662 85.349572A68.201713 68.201713 0 0 0 58.460949 153.551284V370.237869a68.201713 68.201713 0 0 0 68.201713 68.201712h217.660894a68.201713 68.201713 0 0 0 68.201713-68.201712V153.551284a68.201713 68.201713 0 0 0-68.201713-68.201712zM344.323556 1024H126.662662A126.855186 126.855186 0 0 1 0.002338 896.365366V679.678782a126.855186 126.855186 0 0 1 126.660324-126.660323h217.660894a126.855186 126.855186 0 0 1 126.660324 126.660323V896.365366a126.855186 126.855186 0 0 1-126.660324 127.634634zM126.662662 611.477069a68.201713 68.201713 0 0 0-68.201713 68.201713V896.365366a68.201713 68.201713 0 0 0 68.201713 68.201713h217.660894a68.201713 68.201713 0 0 0 68.201713-68.201713V679.678782a68.201713 68.201713 0 0 0-68.201713-68.201713zM883.311948 1024H665.845916a126.855186 126.855186 0 0 1-126.660324-126.660324V679.678782a126.855186 126.855186 0 0 1 126.660324-126.660323h217.466032a126.855186 126.855186 0 0 1 126.660324 126.660323V896.365366a126.855186 126.855186 0 0 1-126.660324 127.634634zM665.845916 611.477069a68.201713 68.201713 0 0 0-68.201713 68.201713V896.365366a68.201713 68.201713 0 0 0 68.201713 68.201713h217.466032a68.201713 68.201713 0 0 0 68.201713-68.201713V679.678782a68.201713 68.201713 0 0 0-68.201713-68.201713zM774.578932 524.763463a125.686013 125.686013 0 0 1-89.636537-37.023787l-136.403425-136.403425a126.855186 126.855186 0 0 1 0-179.078211l136.403425-136.403425a126.855186 126.855186 0 0 1 179.078212 0l136.403425 136.403425a126.855186 126.855186 0 0 1 0 179.078211l-136.403425 136.403425a125.686013 125.686013 0 0 1-89.441675 37.023787z m0-466.304852a68.006851 68.006851 0 0 0-48.325785 19.486203l-136.403425 136.403426a68.201713 68.201713 0 0 0 0 96.456708l136.403425 136.403425a70.150333 70.150333 0 0 0 96.456708 0l136.403425-136.403425a68.396575 68.396575 0 0 0 0-96.456708l-136.403425-136.403426a68.006851 68.006851 0 0 0-48.130923-19.486203z"
                                    p-id="40843" fill="#bfbfbf"/>
                            </svg>
                        </div>
                    </li>

                </ul>
            </HeaderIconsWrapper>
        </div>
    );
};

export default memo(Icons);
