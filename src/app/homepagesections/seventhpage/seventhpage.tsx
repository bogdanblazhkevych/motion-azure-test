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
export default function SeventhPage() {
    const [geojson, setGeojson] = useState<GeoFeatureCollection>();
    const [rotateX, setRotateX] = useState(30);
    const [rotateY, setRotateY] = useState(-20);

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
        };

        const interval = setInterval(update, 10);

        return () => clearInterval(interval);
    }, [geojson, rotateX, rotateY]);
    
    return (
        <div className={styles.seventhpagewrapper}>
            <div className={styles.seventhpagecontainer}>
                <div className={styles.textcontent}>
                        <h3>
                            PLATFORM
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