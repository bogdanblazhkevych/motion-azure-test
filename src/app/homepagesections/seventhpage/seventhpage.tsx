'use client'

import { useEffect, useState } from 'react';
import styles from './styles.module.css'
import * as d3 from 'd3';

import { ExtendedFeatureCollection, ExtendedFeature } from 'd3-geo';

interface GeoFeature extends ExtendedFeature {
    properties: {
        name: string;
    };
}

interface GeoFeatureCollection extends ExtendedFeatureCollection {
    features: GeoFeature[];
}

type CircleInterface = {
    center: [number, number],
    radius: number,
    maxRadius: number
}

type CircleListInterface = CircleInterface[]

export default function SeventhPage() {
    const [geojson, setGeojson] = useState<GeoFeatureCollection>();
    const [rotateX, setRotateX] = useState(30);
    const [rotateY, setRotateY] = useState(-20);
    const [circles, setCircles] = useState<CircleListInterface>([

        { center: [-74.006, 40.7128], radius: 3.5, maxRadius: 4.5 },
        { center: [-87.6298, 41.8781], radius: 2.8, maxRadius: 5 },
        { center: [-97.7431, 30.2500], radius: 1.2, maxRadius: 2.5 }, // Austin
        { center: [-43.1729, -22.9068], radius: 1.5, maxRadius: 3 },
        { center: [-75.5660, 6.2442], radius: 1.8, maxRadius: 3.5 }, // Medellín
        { center: [-3.7038, 40.4168], radius: 0.6, maxRadius: 2.8 }, // Madrid
        // { center: [12.4964, 41.9028], radius: 0, maxRadius: 3.7 }, // Rome
        { center: [2.3522, 48.8566], radius: 0.2, maxRadius: 2.8 }, // Paris
        { center: [-0.128, 51.5074], radius: 1.2, maxRadius: 2.5 }, // London
        // { center: [-6.2603, 53.3498], radius: 3, maxRadius: 3.5 }, // Dublin
        // { center: [4.8952, 52.3676], radius: 0, maxRadius: 2.5 }, // Amsterdam
        // { center: [13.4050, 52.5200], radius: 0.8, maxRadius: 3.8 }, // Berlin
        // { center: [16.3738, 48.2082], radius: 0.4, maxRadius: 2.9 }, // Vienna
        { center: [21.0122, 52.2297], radius: 1, maxRadius: 3.2 }, // Warsaw
        { center: [30.5234, 50.4501], radius: 2.3, maxRadius: 3.5 }, // Kyiv
        { center: [34.7818, 32.0853], radius: 1.2, maxRadius: 2.5 }, // Tel Aviv
        { center: [55.2708, 25.2048], radius: 1.5, maxRadius: 3 }, // Dubai
        { center: [28.9795, 41.0082], radius: 2.2, maxRadius: 3.5 }, // Istanbul
        { center: [103.8198, 1.3521], radius: 1.4, maxRadius: 2.6 }, // Singapore
        { center: [121.5654, 25.0320], radius: 1.3, maxRadius: 2.4 }, // Taipei
        { center: [151.2093, -33.8688], radius: 2.5, maxRadius: 4 }, // Sydney
        { center: [-58.4173, -34.6118], radius: 2, maxRadius: 3.5 }, // Buenos Aires


        // Add more cities as needed...

        // { center: [0.1278, 51.5074], radius: 1.5, maxRadius: 2.5 },
        // { center: [-74.006, 40.7128], radius: 0, maxRadius: 4.5 },
        // { center: [2.3522, 48.8566], radius: 1, maxRadius: 1.8 }, 
        // { center: [30.5234, 50.4501], radius: 2.5, maxRadius: 3.5 }, 
        // { center: [34.7818, 32.0853], radius: 1.2, maxRadius: 2 },
        // { center: [-118.2437, 34.0522], radius: 4, maxRadius: 5.5 }, 
        // { center: [139.6917, 35.6895], radius: 1.8, maxRadius: 3 }, 
        // { center: [-0.128, 51.5074], radius: 1.2, maxRadius: 2 }, 
        // { center: [77.1025, 28.7041], radius: 2.5, maxRadius: 4 }, 
        // { center: [-58.4173, -34.6118], radius: 2.8, maxRadius: 4 }, 
        // { center: [-70.6483, -33.4372], radius: 1.5, maxRadius: 2.5 }, 
        // { center: [116.4074, 39.9042], radius: 2, maxRadius: 3.5 }, 
        // { center: [-3.7038, 40.4168], radius: 1.3, maxRadius: 2.2 }, 
        // { center: [-87.6298, 41.8781], radius: 3.5, maxRadius: 5 }, 
        // { center: [28.9784, 41.0082], radius: 1.6, maxRadius: 2.8 }, 
        // { center: [-46.6333, -23.5505], radius: 1.7, maxRadius: 2.8 },
        // { center: [126.978, 37.5665], radius: 2.2, maxRadius: 3.8 }, 
        // { center: [2.1734, 41.3851], radius: 1.4, maxRadius: 2.3 }, 
        // { center: [114.0719, 51.0447], radius: 2.3, maxRadius: 3.7 }, 
        // { center: [151.2093, -33.8688], radius: 2.6, maxRadius: 4 }, 
        // { center: [4.8952, 52.3676], radius: 1.3, maxRadius: 2.2 }, 
        // { center: [-99.1332, 19.4326], radius: 2, maxRadius: 3.5 }, 
        // { center: [12.4964, 41.9028], radius: 1.5, maxRadius: 2.5 }, 
        // { center: [-43.1729, -22.9068], radius: 1.8, maxRadius: 3 },
    ]
    )

    const fetchGeoJson = async () => {
        d3.json<GeoFeatureCollection>('https://gist.githubusercontent.com/d3indepth/f28e1c3a99ea6d84986f35ac8646fac7/raw/c58cede8dab4673c91a3db702d50f7447b373d98/ne_110m_land.json').then(result => setGeojson(result));
    }

    useEffect(() => {
        fetchGeoJson()
    }, [])

    useEffect(() => {
        const canvas = document.getElementById('content') as HTMLCanvasElement;
        const context = canvas.getContext('2d');

        if (!context) return;

        const width = 800;
        const height = 800;

        const projection = d3.geoOrthographic().rotate([-100, -45]).translate([width / 2, height / 2]).scale(350);
        const geoGenerator = d3.geoPath().projection(projection).context(context);

        const update = () => {
            setRotateX(prevRotateX => prevRotateX + 0.1);
            projection.rotate([rotateX, rotateY]);

            context.clearRect(0, 0, canvas.width, canvas.height);

            context.lineWidth = 3;
            context.strokeStyle = '#232323';

            context.beginPath();
            if (geojson) geoGenerator(geojson);
            context.stroke();

            let graticule = d3.geoGraticule();
            context.beginPath();
            context.strokeStyle = 'rgba(0, 0, 0, 0)';
            geoGenerator(graticule());
            context.stroke();

            circles.forEach((item, index) => {
                let opacity = 1;
                if (item.radius > (item.maxRadius / 2)) {
                    opacity = 1 + ((item.radius - (item.maxRadius / 2)) * (-1 / (item.maxRadius / 2)))
                }
                console.log(opacity)

                let circle = d3.geoCircle().center(item.center).radius(item.radius)
                // context.fillStyle = `rgba(31,121,148, ${opacity})`;
                context.fillStyle = `rgba(0,0,0,0)`;
                context.beginPath();
                geoGenerator(circle());
                // context.strokeStyle = 'rgba(0, 0, 0, 0)';
                context.lineWidth = 4; 
                context.strokeStyle = `rgba(31,121,148, ${opacity})`;
                context.stroke();
                context.fill();

                let newCircleList = [...circles];
                if (item.radius >= item.maxRadius) {
                    newCircleList[index].radius = 0
                } else {
                    newCircleList[index].radius += 0.01
                }
                setCircles(newCircleList);
            })
        };

        const interval = setInterval(update, 10);

        return () => clearInterval(interval);
    }, [geojson, rotateX, rotateY]);

    return (
        <div className={styles.seventhpagewrapper}>
            <div className={styles.seventhpagecontainer}>
                <div className={styles.textcontent}>
                    <h3>
                        ECOSYSTEMS
                    </h3>

                    <h1>
                        The Global Innovation Ecosystem Platform
                    </h1>

                    <p>
                        Motion, the global ecosystem platform, a technology-first approach to unlock the power of ecosystem connectedness for speed on innovation. A catalyst for startup success and high-performance innovation ecosystems.
                    </p>

                    <button type="submit" className={styles.submitbutton}>Explore Global Partner Program</button>
                </div>
                <canvas id="content" width={800} height={800} />
            </div>
        </div>
    );
}