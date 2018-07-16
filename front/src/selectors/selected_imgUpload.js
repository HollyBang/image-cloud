import { createSelector } from 'reselect';



const selectorImgUpload = createSelector(
    state => state.imgUpload.isFetching,
    (loadingFlag) => loadingFlag
)

export default selectorImgUpload;

