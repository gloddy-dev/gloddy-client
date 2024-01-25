import useDidMount from './common/useDidMount/useDidMount';
import { IS_PRODUCTION } from '@/constants';

export function useEasterEgg() {
  useDidMount(() => {
    if (!IS_PRODUCTION) {
      return;
    }
    if (typeof window !== 'undefined') {
      console.log(`
      --------------------------------------------------------------
  --------------------------------------------------------------
  ---------------------------------------------------------~----
  ---------------------------------------------------------*!---
  --~;;;;;;;;;;;;;;;--------------------------------------:$#~--
  --~##############*--------------------------------------*##~--
  --~#$;;;=##*;;;##=--------------------------------------*##~--
  --~$:---!##:---;#$---------------------------***--------*##~--
  --:=----!##:----#$-------------------------*=###====!---*##~--
  -~=~----!##:----#$-------------------------$#:~:####*---*##~--
  --;-----!##:----*$------------------------=#!--~##=-----;$#~--
  --------!##:-------~;$*~------------------=#~--~$#=------=#~--
  --------!##:------:#$$$#!---~~@#-:##=~----=#~---~#=------=#~--
  --------!##:-----~#=--;$=:-~$###:#$##*~---=#;---~#=------=#~--
  --------!##:-----!#=---!#;-;*####*!=#$;---=##~--~#=------=$~--
  --------!##:-----=#=---!#;---$##!--:##!---=##~--~#=------==~--
  --------!##:-----:#=---!#;---$##---:$#!---;$#:--*$;------==~--
  --------!##:------;:--:=#;---$##---~=#!----;$=**$;-------=;---
  --------!##:--------:*=$#;---$##---:$#!-----$$#::--------=:---
  --------!##:-------:$=:*#;---$##---:##!----*:~:----------=:---
  --------!##:------~$=~-!#;---$##---~*#!---*#~------------=:---
  --------!##:-----~#=---!#;---$##---~=#!---=##;;---------------
  --------!##:-----~#=---!#;---$##---~*#!---=#######=-----------
  --------!##:----~##=---!#;---$##---~*#!---*########=-----~~---
  --------!##:----~##=--~*#;---$##---~=#!---~*!=====$$;---~=#~--
  --------!##:----~##=:~*##*~--$##---~*#!--~=:------:=*---*##~--
  -------:=##*~----*##=*==##=~-$##---:=#!--;$:-------:;---*##~--
  -----~!=####*!---~###=:!##*~;$##!!~*##=!~*#:------~;~---;$*~--
  -----~;;;;;;;;----;;;:-:;;~-;;;;;;~;;;;;~*#:-----~=*-----:~---
  -----------------------------------------*#=**==*==:----------
  -----------------------------------------~=######=~-----------
  ------------------------------------------~$###$~~------------
  --------------------------------------------------------------`);
    }
  });
}