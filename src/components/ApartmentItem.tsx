interface IAptItemProps {
    name: string;
    units: number;
    ownerId?: number;
}

const ApartmentItem = (props: IAptItemProps): JSX.Element => {
    return (
        <div>
            <h3>{props.name}</h3>
            <p>{props.units}</p>
        </div>
    )
}

export default ApartmentItem;

