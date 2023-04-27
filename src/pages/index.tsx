import styles from '@/styles/profile/Home.module.css'
import Image from 'next/image'
import { Box, Grid, Stack, Typography } from '@mui/material'
import okamon from '../../public/image/okamon.png'
import { pageMinHeight } from '../const/heightSetting'
import { BaseHead } from '@/components/BaseHead'
export default function Home() {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: pageMinHeight }}>
      <BaseHead title={'Okamon.dev'} />
      <Stack direction={{ xs: 'column', sm: 'row-reverse' }} spacing={4}>
        <Box display="flex" sx={{ justifyContent: 'center' }}>
          <Image src={okamon} width={250} height={250} alt="okamon-image" />
        </Box>
        <Box display="flex" alignItems={{ xs: 'center', sm: 'center' }}>
          <Grid display="flex" justifyContent={{ xs: 'center', sm: 'center' }}>
            <Typography variant="h4" gutterBottom className={`${styles.textglow} ${styles.textgradient}`}>
              Frontend Developer
            </Typography>
          </Grid>
          {/* <Grid display="flex" justifyContent={{ xs: 'center', sm: 'center' }}>
            <Link
              href={'/profile/helloworld'}
              className={`${styles.btn} ${styles.btngradientborder} ${styles.btnglow}`}>
              <span className={styles.textgradient}> Hello Okamon World!</span>
            </Link>
          </Grid> */}
        </Box>
      </Stack>
    </Grid>
  )
}
