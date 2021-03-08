

const CategoryDetail = (props) => {
    const {name,category} = props.product;
    // const [category] = useContext(createCategory)
    return (
        <div>
            <h4>Name: {name} </h4>
            <h6>Category: {category} </h6>
        </div>
    );
};

export default CategoryDetail;