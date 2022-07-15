import {makeStyles} from '@material-ui/core/styles';
export default makeStyles(()=>({
   root:
   {
       maxWidth: '100%',
       width:'97%',
       marginLeft:'auto',
       marginRight:'auto',
       marginTop: '30px',
       paddingTop:'10px'
   },
   media:
   {
       height:'400px',
       marginLeft:'auto',
       marginRight:'auto',
       width:'100%',
   },
   cardActions:
   {
       display:'flex',
       justifyContent:'flex-end',
   },
   cardContext:
   {
       display:'flex',
       justifyContent:'space-between',
       
   },
}));