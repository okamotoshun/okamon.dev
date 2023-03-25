import styles from '../styles/profile/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { Box, Grid, Stack, Typography } from '@mui/material'
import okamon from '../../public/image/okamon.png'
import { pageMinHeight } from '../const/heightSetting'
export default function Home() {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: pageMinHeight }}>
      <Stack direction={{ xs: 'column', sm: 'row-reverse' }} spacing={4}>
        <Box display="flex" sx={{ justifyContent: 'center' }}>
          <Image src={okamon} width={150} height={150} alt="okamon-image" />
        </Box>
        <Box>
          <Grid display="flex" justifyContent={{ xs: 'center', sm: 'center' }}>
            <Typography variant="h4" gutterBottom className={`${styles.textglow} ${styles.textgradient}`}>
              Frontend Developer
            </Typography>
          </Grid>
          <Grid display="flex" justifyContent={{ xs: 'center', sm: 'center' }}>
            <Link
              href={'/profile/helloworld'}
              className={`${styles.btn} ${styles.btngradientborder} ${styles.btnglow}`}>
              <span className={styles.textgradient}> Hello Okamon World!</span>
            </Link>
          </Grid>
        </Box>
      </Stack>
    </Grid>
  )
}
