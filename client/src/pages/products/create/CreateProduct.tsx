import React, { useState, useEffect } from "react";
import { Promise } from 'bluebird';

// Styled Components
import {
  FormConteiner,
  Image,
  Fields,
  IconAdd
} from "./styled-components/CreateProduct.styled";

// Material UI
import {
  TextField,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  FormControl,
  Button,
  Snackbar,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import AddIcon from '@mui/icons-material/Add';

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Actions
import { getAllCategories } from "../../../redux/slices/products";
import { useAppDispatch, useAppSelector } from "../../../redux/app/hooks";
import { postProduct } from "../services/products.service";
import { Slider } from "../../detail/components/Slider/Slider";
import { uploadFile } from "../../../firebase/firebase.config";
import { Product } from "./models/product";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CreateProduct() {
  const [product, setProduct] = useState<Product>({
    code: "",
    name: "",
    price: "",
    stock: "",
    description: "",
    categoryId: "",
    state: true,
    images: [],
  });
  const [error, setError] = useState({
    code: "",
    name: "",
    price: "",
    stock: "",
    description: "",
    categoryId: "",
    images: [],
  });
  const [open, setOpen] = useState(false);
  var hasError = false;
  const fontSizeLabel = 17;
  const fontSizeInput = 15;
  const dispatch = useAppDispatch();
  const { categories } = useAppSelector(
    ({ categoriesState }) => categoriesState
  );
  const [loading, setLoading] = useState(false);

  var inputFile: HTMLInputElement | null = null;

  // Get all categories
  useEffect(() => {
    if (!categories.length) dispatch(getAllCategories());
  }, []);

  function handlerChange(key: any, value: any) {
    setProduct({
      ...product,
      [key]: key === "code" ? (value.length < 6 ? value : product.code) : value,
    });

    if (!value)
      setError({
        ...error,
        [key]: !value
          ? `${key.charAt(0).toUpperCase() + key.slice(1)} cannot be empty.`
          : false,
      });
  }



  function handlerSubmit() {
    var newError = error;

    if (!product.categoryId) {
      hasError = true;
      newError = { ...newError, categoryId: "Category cannot be empty." };
    }

    if (!product.code) {
      hasError = true;
      newError = { ...newError, code: "Code cannot be empty." };
    }

    if (product.code.length < 5) {
      hasError = true;
      newError = { ...newError, code: "Code requires 5 characters." };
    }

    if (!product.description) {
      hasError = true;
      newError = { ...newError, description: "." };
    }

    if (!product.name) {
      hasError = true;
      newError = { ...newError, name: "Name cannot be empty." };
    }

    if (!product.price) {
      hasError = true;
      newError = { ...newError, price: "Price cannot be empty." };
    }

    if (!product.stock) {
      hasError = true;
      newError = { ...newError, stock: "Stock cannot be empty." };
    }

    if (hasError) setError(newError);

    if (!hasError) submit();
  }

  function handleClose(event?: React.SyntheticEvent | Event, reason?: string) {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  }

  function submit() {
    postProduct(product, setLoading, setOpen);
    setProduct({
      code: "",
      name: "",
      price: "",
      stock: "",
      description: "",
      categoryId: "",
      state: true,
      images: [],
    });
  }

  const ImagesTest = [
    { url_image: 'https://d320djwtwnl5uo.cloudfront.net/recetas/share/share_fpa6sn8vqc_empanadas.jpg' },
    { url_image: 'https://media.tycsports.com/files/2022/12/19/517541/lionel-messi_1440x810_wmk.webp' },
  ];

  //----------- octa
  function handleChangeInputImage(target:EventTarget & HTMLInputElement){
    var newFiles = [];

    if(target.files?.length){
      for(var i=0; i<target.files.length; i++){
        newFiles[i] = target.files[i];
      }

      Promise.map(
        newFiles,
        (file)=> uploadFile(file)
      ).then((images)=> setProduct({...product, images: [...product.images, ...images]}));
    }
  }
  //---------- octa

  return (
    <FormConteiner className="container">
      <Image>
        <div>
          <input ref={(input) => inputFile = input} type={'file'} style={{ display: 'none' }} onChange={({target})=> handleChangeInputImage(target)}/>
          <IconAdd>
            <AddIcon style={{
              fontSize: '60px',
              padding: '10px',
              borderRadius: '3px',
              color: '#bdc3d1'
            }} onClick={()=> inputFile?.click()}/>
          </IconAdd>
        </div>
        
      </Image>

      <Fields>
        <h3>Create product</h3>
        <div>
          <TextField
            InputLabelProps={{
              style: { fontSize: fontSizeLabel },
            }}
            label="Name"
            name="name"
            value={product.name}
            placeholder="Product name"
            sx={{ m: 1, width: "100%" }}
            InputProps={{
              style: { fontSize: fontSizeInput },
            }}
            variant="outlined"
            error={error.name ? true : false}
            helperText={
              error.name && (
                <span style={{ fontSize: "13px" }}>{error.name}</span>
              )
            }
            onChange={e => handlerChange(e.target.name, e.target.value)}
            onFocus={e => handlerChange(e.target.name, e.target.value)}
          />

          <TextField
            InputLabelProps={{
              style: { fontSize: fontSizeLabel },
            }}
            label="Code"
            name="code"
            value={product.code}
            sx={{ m: 1, width: "100%" }}
            InputProps={{
              style: { fontSize: fontSizeInput },
            }}
            placeholder="Code of 5 characters"
            variant="outlined"
            error={error.code ? true : false}
            helperText={
              error.code && (
                <span style={{ fontSize: "13px" }}>{error.code}</span>
              )
            }
            onChange={e => handlerChange(e.target.name, e.target.value)}
            onFocus={e => handlerChange(e.target.name, e.target.value)}
          />

          <TextField
            InputLabelProps={{
              style: { fontSize: fontSizeLabel },
            }}
            label="Price"
            name="price"
            value={product.price}
            placeholder="$"
            sx={{ m: 1, width: "100%" }}
            InputProps={{
              style: { fontSize: fontSizeInput },
              type: "number",
            }}
            variant="outlined"
            error={error.price ? true : false}
            helperText={
              error.price && (
                <span style={{ fontSize: "13px" }}>{error.price}</span>
              )
            }
            onChange={e => handlerChange(e.target.name, e.target.value)}
            onFocus={e => handlerChange(e.target.name, e.target.value)}
          />

          <TextField
            InputLabelProps={{
              style: { fontSize: fontSizeLabel },
            }}
            label="Stock"
            name="stock"
            value={product.stock}
            placeholder="Product stock"
            sx={{ m: 1, width: "100%" }}
            InputProps={{
              style: { fontSize: fontSizeInput },
              type: "number",
            }}
            variant="outlined"
            error={error.stock ? true : false}
            helperText={
              error.stock && (
                <span style={{ fontSize: "13px" }}>{error.stock}</span>
              )
            }
            onChange={e => handlerChange(e.target.name, e.target.value)}
            onFocus={e => handlerChange(e.target.name, e.target.value)}
          />

          <FormControl
            fullWidth
            sx={{ margin: "8px" }}
            error={error.categoryId ? true : false}
          >
            <InputLabel
              id="demo-simple-select-label"
              sx={{
                fontSize: fontSizeLabel,
              }}
            >
              Category
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              name="categoryId"
              label="Category "
              value={product.categoryId}
              sx={{ fontSize: fontSizeInput }}
              onChange={e => handlerChange(e.target.name, e.target.value)}
              onFocus={e => handlerChange(e.target.name, e.target.value)}
            >
              {categories.length ? (
                categories.map((category) => (
                  <MenuItem
                    value={parseInt(category.id.toString())}
                    sx={{
                      fontSize: fontSizeInput,
                    }}
                  >
                    {category.name}
                  </MenuItem>
                ))
              ) : (
                <></>
              )}
            </Select>
            {error.categoryId ? (
              <FormHelperText>
                <span style={{ fontSize: "13px" }}>
                  Category cannot be empty
                </span>
                .
              </FormHelperText>
            ) : (
              <></>
            )}
          </FormControl>

          <TextField
            name="description"
            label="Description"
            multiline
            value={product.description}
            rows={4}
            sx={{ m: 1, width: "100%" }}
            InputProps={{
              style: { fontSize: fontSizeInput },
            }}
            InputLabelProps={{
              style: { fontSize: fontSizeLabel },
            }}
            error={error.description ? true : false}
            helperText={
              error.description && (
                <span style={{ fontSize: "13px" }}>
                  Description cannot be empty.
                </span>
              )
            }
            onChange={e => handlerChange(e.target.name, e.target.value)}
            onFocus={e => handlerChange(e.target.name, e.target.value)}
          />

          {!loading ? (
            <Button
              variant="contained"
              color="success"
              sx={{
                width: "100%",
                margin: "8px",
                height: "50px",
                fontSize: fontSizeInput,
              }}
              onClick={handlerSubmit}
              disabled={
                error.categoryId
                  ? true
                  : false || error.code
                    ? true
                    : false || error.description
                      ? true
                      : false || error.name
                        ? true
                        : false || error.price
                          ? true
                          : false || error.stock
                            ? true
                            : false
              }
            >
              Create
            </Button>
          ) : (
            <LoadingButton
              loading
              variant="outlined"
              sx={{
                width: "100%",
                margin: "8px",
                height: "50px",
                backgroundColor: "#66BB6A",
              }}
            />
          )}

          {!loading && (
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
              <Alert
                severity="success"
                sx={{ width: "100%", fontSize: fontSizeInput }}
              >
                Product successfully published!
              </Alert>
            </Snackbar>
          )}
        </div>
      </Fields>
    </FormConteiner>
  );
}
