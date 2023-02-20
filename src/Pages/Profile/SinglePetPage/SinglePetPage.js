import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useLoaderData } from "react-router-dom";
import LeftSide from './LeftSide';
// import RightSide from './RightSide';

import './SinglePetPage.css';

const SinglePetPage = () => {
    const petDetails = useLoaderData();
    console.log("petDetails", petDetails);
    const { name, type, adoptionStatus, height, weight, color, hypoallergenic, dietaryRestrictions, image, breedOfAnimal, address, price, additionalInformation } = petDetails[0];

    return (
        <div className='bg'>

            <Row className='w-75 mx-auto'>
                <Col xs={6} md={3} className='bgl'>
                    <LeftSide></LeftSide>
                </Col>
                <Col xs={12} md={9}>
                    {/* <RightSide petDetails={petDetails}></RightSide> */}

                    <div>
                        <div class="card ">
                            <img src={image} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h1 class="card-title">{name}</h1>
                                <h4>Adoption Status: {adoptionStatus}</h4>
                                <h4>Type: {type}</h4>
                                <h4> Height: {height}</h4>
                                <h4> Weight: {weight}</h4>
                                <h4>Color: {color}</h4>
                                <h4>Bio: </h4>
                                <h4> Hypoallergenic (yes/no): {hypoallergenic}</h4>
                                <h4> dietary restrictions: {dietaryRestrictions}</h4>
                                <h4> breed of animal : {breedOfAnimal}</h4>
                                <h4> Address : {address}</h4>
                                <h4> AdditionalInformation : {additionalInformation}</h4>
                                <h4> Price : ${price}</h4>

                                <div
                                    class="btn-group"
                                    role="group"
                                    aria-label="Basic mixed styles example"
                                >
                                    <button type="button" class="btn btn-danger">
                                        {" "}
                                        Return Pet
                                    </button>
                                    <button type="button" class="btn btn-warning">
                                        Adopt
                                    </button>
                                    <button type="button" class="btn btn-success">
                                        Foster
                                    </button>
                                    <button type="button" class="btn btn-primary">
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>

        </div>
    );
};

export default SinglePetPage;