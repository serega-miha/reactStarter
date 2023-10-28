import { Routes, Route } from "react-router-dom";


const AboutBody = () => {
    return (
        <Routes>
            <Route path="contacts" element={<p>contacts</p>} />
            <Route path="team" element={<p>team</p>} />
            <Route path="punkt" element={<p>many many opunkts</p>} />
        </Routes>
        )
}

export default AboutBody;