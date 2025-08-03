import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import SectionHeader from "./shared/SectionHeader";

const containerStyle = {
    width: "100%",
    height: "400px",
};

const center = {
    lat: 30.0444, // إحداثيات القاهرة كمثال
    lng: 31.2357,
};

const MapSection = () => {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyBKXY7WXF3N0Odk07x-VEE5pA1d5j-1IQQ", // حط مفتاحك هنا
    });


    const onLoad = () => { };
    const onUnmount = () => { };

    if (!isLoaded) return <div>جار تحميل الخريطة...</div>;

    return (
        <div className="custom-container bg-white pb-10 rounded-t-[40px] w-full">
            <SectionHeader reverse title={"موقعنــــا على الخريــــطة."} description={"نحن متواجدون في قلب المملكة، بمكتب قانوني يرحّب بك متى ما احتجت إلى استشارة أو متابعة قضيتك. "} />
            <div className=" rounded-xl overflow-hidden">
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={12}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                    options={{
                        zoomControl: true,
                        zoomControlOptions: {
                            position: window.google.maps.ControlPosition.LEFT_BOTTOM,
                        },
                        streetViewControl: false,
                        mapTypeControl: false,
                        fullscreenControl: false,
                    }}
                >

                    <div
                        title="123 شارع المثال، القاهرة، مصر"
                        onClick={() => alert("هذا هو العنوان")}
                    >
                        "123 شارع المثال، القاهرة، مصر"
                    </div>
                </GoogleMap>
            </div>
        </div>
    );
};

export default MapSection;
