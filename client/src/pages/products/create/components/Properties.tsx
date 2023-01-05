
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { TransitionGroup } from "react-transition-group";
import { Property } from "../models/properties.model";
import { PropertiesContainer, PropertyBar } from "../styled-components/CreateProduct.styled";

export default function Properties({ properties, deleteProperty }: { properties: Property[], deleteProperty: Function }) {
    return (
        <PropertiesContainer>
            <TransitionGroup>
                {properties.map((item, index) => (
                    <Collapse key={index}>
                        <PropertyBar>
                            <div style={{ marginLeft: '10px' }}>
                                <span style={{ textTransform: 'capitalize', fontWeight: '600' }}> {item.name} : </span>
                                <span> {item.value} </span>
                            </div>
                            <IconButton
                                edge="end"
                                aria-label="delete"
                                title="Delete"
                                onClick={() => deleteProperty(index)}
                                style={{ marginRight: '10px' }}
                            >
                                <DeleteIcon />
                            </IconButton>
                        </PropertyBar>
                    </Collapse>
                ))}
            </TransitionGroup>
        </PropertiesContainer>
    );
}