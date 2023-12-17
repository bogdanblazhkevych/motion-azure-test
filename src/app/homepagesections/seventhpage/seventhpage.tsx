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
        { center: [2.3522, 48.8566], radius: 0.2, maxRadius: 2.8 }, // Paris
        { center: [-0.128, 51.5074], radius: 1.2, maxRadius: 2.5 }, // London
        { center: [21.0122, 52.2297], radius: 1, maxRadius: 3.2 }, // Warsaw
        { center: [30.5234, 50.4501], radius: 2.3, maxRadius: 3.5 }, // Kyiv
        { center: [34.7818, 32.0853], radius: 1.2, maxRadius: 2.5 }, // Tel Aviv
        { center: [55.2708, 25.2048], radius: 1.5, maxRadius: 3 }, // Dubai
        { center: [28.9795, 41.0082], radius: 2.2, maxRadius: 3.5 }, // Istanbul
        { center: [103.8198, 1.3521], radius: 1.4, maxRadius: 2.6 }, // Singapore
        { center: [121.5654, 25.0320], radius: 1.3, maxRadius: 2.4 }, // Taipei
        { center: [151.2093, -33.8688], radius: 2.5, maxRadius: 4 }, // Sydney
        { center: [-58.4173, -34.6118], radius: 2, maxRadius: 3.5 }, // Buenos Aires
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

        let lastFrameTime = 0;

        const update = (timestamp: number) => {
            if (!lastFrameTime) {
                lastFrameTime = timestamp;
            }

            const elapsed = timestamp - lastFrameTime;

            if (elapsed > 33) {
                setRotateX(prevRotateX => prevRotateX + 0.3);
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
                    let circle = d3.geoCircle().center(item.center).radius(item.radius)
                    let opacity = 1;
                    if (item.radius > (item.maxRadius / 2)) {
                        opacity = 1 + ((item.radius - (item.maxRadius / 2)) * (-1 / (item.maxRadius / 2)))
                    }
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
                        newCircleList[index].radius += 0.03
                    }
                    setCircles(newCircleList);
                })

            } else {
                requestAnimationFrame(update);
            }
        }

        const initialCall = requestAnimationFrame(update);
        return () => cancelAnimationFrame(initialCall);
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
                <div className={styles.canvascontainer}>
                    <canvas id="content" width={800} height={800} />
                </div>
            </div>
        </div>
    );
}