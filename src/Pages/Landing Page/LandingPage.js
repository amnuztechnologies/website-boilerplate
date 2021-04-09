import axios from 'axios'
import React, { Component } from 'react'

import './landingpage.css'

export default class LandingPage extends Component {
    constructor(props) {
        super(props)

        this.onChngeEmail = this.onChngeEmail.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            pageOpacity: 0,
            email: '',
            disableInput: false,
            message: 'NOTIFY ME!'
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                pageOpacity: 1
            })
        }, 2000);
    }

    onChngeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault()
        function validateEmail(email) {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }
        const isValidEmail = validateEmail(this.state.email)
        if (!isValidEmail) return console.log('Email not Valid');
        this.setState({
            disableInput: true,
            message: `Adding`
        })

        const data = {
            email: this.state.email
        }
        axios.post('https://mohammedfarish-public-api.herokuapp.com/v1/bin/amnuzboilerplate' + window.document.location.host, data)
            .then(() => {
                this.setState({
                    message: `Success!`
                })
            })
            .catch((err) => {
                this.setState({
                    disableInput: false
                })
            })
    }

    render() {
        return (
            <div
                hidden
                style={{ opacity: this.state.pageOpacity }}
                className="landing-page">
                <svg className="starship" x="0px" y="0px"
                    width="170" height="170"
                    viewBox="1.000001 1.000003 340 1193.465454"  >
                    <path class="selected" opacity="1.000000" stroke="none" d="M108.909647 698.715411 C103.795572 698.048724 99.200235 697.094867 94.562387 696.792193 C89.417932 696.456500 84.230478 696.837725 79.070169 696.660907 C76.691736 696.579303 76.080682 696.812823 76.751993 699.474810 C77.228174 701.363116 76.234888 703.621966 75.897501 705.715411 C74.901544 703.723346 73.885004 701.741229 72.918466 699.734942 C72.444696 698.751544 72.147180 696.907794 71.626581 696.854510 C69.184930 696.604754 66.693491 696.841937 64.219842 696.905230 C64.602197 699.161029 64.503732 701.657061 65.481897 703.615252 C66.877466 706.408892 70.306055 708.717120 70.503244 711.406024 C70.652292 713.438494 67.134698 715.770648 65.183862 717.910113 C64.459802 718.704119 63.550348 719.329119 62.725442 720.031207 C62.770776 718.775348 62.368082 717.250933 62.933878 716.307086 C66.714120 710.000567 66.674478 710.161578 61.331018 705.444659 C60.263269 704.502093 59.964197 702.240802 59.994043 700.599994 C60.049158 697.569720 58.899271 696.621478 55.913721 696.660113 C45.082834 696.800433 34.242776 696.934893 23.418863 696.626361 C17.681009 696.462725 11.945642 695.536578 6.253610 694.664508 C2.021806 694.016070 0.089250 689.652240 2.116220 686.001117 C2.414819 685.463214 2.895906 684.877154 2.871484 684.332293 C2.598596 678.244220 2.211221 672.161212 1.926363 666.073565 C1.822527 663.854754 1.908495 661.626910 1.909875 659.403216 C1.913240 654.011370 1.919801 648.619464 1.920999 643.227618 C1.921632 640.396136 1.911043 637.564593 1.910204 634.733111 C1.908403 628.676287 2.035425 622.615985 1.868646 616.563800 C1.742128 611.972552 1.207849 607.393878 0.920732 602.805499 C0.688943 599.101519 0.984994 595.302447 0.242593 591.711932 C-0.354346 588.824969 0.056146 587.302874 2.538751 585.590045 C4.404611 584.302630 6.154260 582.065936 6.776117 579.911456 C8.285776 574.680865 10.524667 570.169268 13.997064 565.821124 C18.028604 560.772784 20.655176 554.622332 24.096887 549.077716 C27.731561 543.222186 31.607950 537.516742 35.379709 531.746295 C35.551752 531.483111 35.851053 531.243243 35.892419 530.963153 C37.093774 522.829913 44.018533 518.386920 48.046136 512.080218 C49.725610 509.450335 51.382669 506.841449 48.624551 503.868304 C48.397058 503.623004 48.624826 502.955340 48.641061 502.483966 C49.063928 502.629718 49.550012 502.983172 49.896432 502.877765 C50.607095 502.661395 51.528802 502.368609 51.860544 501.809100 C53.358072 499.283038 54.927713 496.748492 55.979669 494.026995 C56.705652 492.148883 56.761407 489.967547 56.875772 487.908343 C57.017328 485.359210 56.909647 482.796161 56.909647 480.239154 C56.909647 475.848895 56.909647 471.458636 56.909647 467.068377 C56.909647 459.735492 57.204355 452.386920 56.816843 445.074603 C56.504053 439.171923 57.995279 433.287188 55.228769 427.252887 C53.760553 424.050463 55.897134 419.337451 55.834482 415.315265 C55.740427 409.277545 57.930658 402.725421 52.410303 397.661273 C50.921258 396.295275 51.969095 394.085650 53.859033 393.116534 C54.816095 392.625750 55.724985 391.114642 55.755151 390.039569 C55.778711 389.199176 54.367029 388.355578 53.684381 387.444964 C53.246118 386.860339 52.501489 385.852710 52.697458 385.543017 C55.724634 380.758929 55.151117 375.518878 54.943445 370.271960 C54.776514 366.054980 55.169794 361.805438 54.835992 357.608386 C54.506662 353.467456 53.575372 349.374438 52.910730 345.259997 C52.815042 344.667651 52.441415 343.873889 52.689752 343.509478 C56.105508 338.496447 54.971033 333.243304 54.018304 327.813311 C53.431482 324.468798 52.806009 320.400592 54.162057 317.612719 C56.327295 313.161273 52.716486 309.155566 54.550760 304.929553 C55.386667 303.003650 55.066080 300.453601 54.864496 298.223285 C54.331033 292.321063 53.040964 286.440631 53.021616 280.548327 C52.981927 268.464495 53.915643 256.375201 53.796320 244.294635 C53.709543 235.508380 51.970773 226.719592 52.157465 217.957263 C52.255197 213.370013 53.333139 208.960070 50.936868 204.680224 C50.845666 204.517352 51.074304 203.996112 51.289026 203.867450 C56.492166 200.750232 52.699792 200.223620 50.051279 199.197985 C49.917535 199.146167 50.410913 197.422473 50.645883 196.485675 C50.878793 195.557116 51.154230 194.639300 51.410989 193.716754 C50.488443 193.638385 49.565225 193.485369 48.643472 193.493823 C42.785364 193.547839 36.526590 192.387072 31.192316 194.097766 C26.651208 195.554065 23.188867 193.501117 19.224481 193.623278 C10.024728 193.906787 6.874795 191.202319 7.039468 182.143298 C7.221780 172.113955 5.426446 162.029696 7.797388 152.015765 C8.247293 150.115573 7.357233 147.845004 6.888521 145.790240 C5.400522 139.267093 9.340478 135.461398 13.532999 131.501559 C19.809854 125.573016 25.991754 119.516391 31.837518 113.167559 C36.602487 107.992556 40.483667 101.988253 45.366464 96.941638 C50.283746 91.859408 55.906107 87.449633 61.306207 82.846896 C67.037622 77.961718 70.328470 71.693667 73.534586 64.916644 C79.079492 53.195842 86.195428 42.229174 92.268549 30.743228 C95.862741 23.945559 98.288858 16.518008 102.025400 9.811137 C106.146738 2.413615 116.415643 -2.108266 123.740915 0.987910 C129.086420 3.247287 134.697794 6.659236 136.008615 13.707278 C136.444345 16.050151 138.118845 18.143542 139.063394 20.418925 C139.535562 21.556422 139.698465 22.838076 139.881692 24.072284 C139.959543 24.596530 139.730508 25.166323 139.640909 25.715411 C140.063821 25.374064 140.440347 24.852649 140.919412 24.729243 C141.886667 24.480075 143.666116 24.096247 143.796579 24.377452 C145.868478 28.844287 147.470865 33.540843 149.701669 37.919375 C153.496316 45.367244 157.508188 52.715144 161.710458 59.941211 C165.009378 65.613894 168.218881 71.472140 172.410165 76.455630 C176.804788 81.680880 182.294778 85.991763 187.355844 90.648120 C195.048196 97.725375 202.708871 104.840731 210.553567 111.746157 C212.491952 113.452502 215.243631 114.204928 217.333627 115.778201 C219.146555 117.142916 220.746439 118.905642 222.099954 120.743289 C225.612588 125.512347 231.747751 128.504885 232.120737 135.421649 C232.360635 139.870318 233.021402 144.334475 232.811166 148.759249 C232.567209 153.893405 231.530862 158.986911 230.953317 164.111010 C230.854318 164.989199 231.151926 166.024508 231.570596 166.828830 C233.233682 170.023745 232.947885 169.830783 231.263223 173.111346 C230.601968 174.398989 232.015909 176.629977 232.064066 178.442538 C232.103464 179.924838 231.997354 182.307681 231.134073 182.775744 C224.092538 186.593493 217.530069 191.473773 208.360239 189.007708 C204.277383 187.909686 199.415964 189.814135 194.893411 190.172564 C193.666147 190.269824 192.381815 189.717852 191.131540 189.429858 C190.223917 189.220752 189.329233 188.955584 188.428751 188.715411 C188.255716 189.639941 187.939432 190.563433 187.932748 191.489154 C187.888162 197.660022 187.850992 203.832324 187.955148 210.001757 C187.978220 211.368823 188.438852 212.779528 188.941873 214.075518 C189.695047 216.015979 192.143014 218.244921 187.666208 218.777880 C187.359598 218.814379 186.939279 219.748339 186.948099 220.258410 C186.984598 222.373492 187.191568 224.484881 187.289163 226.599780 C187.631204 234.013110 187.962259 241.426989 188.280954 248.841357 C188.504465 254.041186 188.756479 259.240710 188.890970 264.443103 C188.987161 268.164233 188.654764 271.911883 188.974466 275.607867 C189.370645 280.188189 190.391489 284.713061 190.830759 289.291796 C190.988870 290.939807 189.928171 292.680407 189.959665 294.368731 C190.202005 307.345965 190.732553 320.319323 190.846475 333.296771 C190.907297 340.228289 190.236459 347.163531 190.077280 354.101275 C190.031259 356.106005 190.985879 358.150775 190.849130 360.133532 C189.989450 372.600055 192.577005 385.134356 190.010049 397.585040 C189.622476 399.464892 190.828256 401.616076 190.870462 403.650592 C191.269571 422.900531 192.090951 442.162524 191.711740 461.399798 C191.493051 472.494952 193.115518 482.848834 197.556924 492.906390 C198.861459 495.860492 199.671762 499.033770 200.994180 501.978289 C201.360574 502.794085 202.794900 503.093890 203.652109 503.745074 C203.955423 503.975482 204.187967 504.574603 204.132486 504.959124 C203.584573 508.756366 203.748972 512.174640 207.801340 514.219744 C208.428476 514.536212 208.696085 515.818499 208.886087 516.706317 C210.006143 521.940631 211.343393 526.697345 216.391916 530.104327 C218.656351 531.632525 219.369211 535.712359 220.404184 538.763873 C223.914255 549.112933 230.493906 557.663653 236.304697 566.689776 C239.649576 571.885516 244.014993 576.720111 244.108163 583.436358 C244.158670 587.079242 243.942209 590.724994 243.919138 594.369891 C243.883310 600.035968 243.909647 605.702533 243.909647 611.368853 C243.909647 621.258807 243.523172 631.168414 244.027017 641.032672 C244.461404 649.537310 245.959177 657.985003 246.852090 666.472003 C246.974893 667.639239 246.238473 668.875384 246.043619 670.102435 C245.705789 672.229998 244.932443 674.479388 245.314249 676.493243 C246.311594 681.753375 245.866342 686.786883 241.191995 689.623431 C238.081033 691.511187 233.894388 691.902301 230.116861 692.342242 C225.900522 692.833270 221.591226 692.459307 217.342172 692.750384 C209.386636 693.295428 201.455423 694.246112 193.494882 694.651995 C187.287546 694.968524 181.049844 694.652057 174.829050 694.781207 C173.855936 694.801410 172.936594 695.800433 171.924234 696.148455 C171.321481 696.355548 170.281259 696.465167 169.956827 696.124408 C166.784769 692.792620 164.671945 693.289996 162.862100 697.497760 C160.731485 702.451434 158.174509 707.219928 155.934030 712.128802 C154.472513 715.330890 153.835702 718.294146 150.147226 720.808551 C144.379526 724.740619 145.329904 734.712054 149.329202 740.926104 C151.757730 744.699481 152.542642 749.567035 153.805032 754.016986 C154.002786 754.714190 153.018533 756.295428 152.224741 756.634661 C147.637704 758.594928 147.539682 762.536761 147.976144 766.407855 C148.762491 773.381671 150.226541 780.210833 148.085336 787.310138 C147.321970 789.841143 148.743936 792.972857 148.878213 795.843890 C149.279581 804.425799 148.175943 812.957904 149.602579 821.648639 C150.553293 827.439959 148.485239 833.703631 147.937509 839.771197 C147.469644 844.953997 147.126901 850.155108 146.971872 855.355365 C146.916727 857.205645 147.831827 859.072772 147.863840 860.939776 C147.980020 867.718402 147.795145 874.502887 147.953531 881.279803 C148.045236 885.204364 148.429788 889.138140 148.949106 893.032244 C149.516183 897.284503 148.996072 901.264666 148.123544 905.509478 C146.671945 912.571612 146.608560 919.915606 145.887674 927.133624 C145.700265 929.010028 145.011728 930.855059 144.976480 932.722552 C144.943033 934.492144 145.590555 936.263629 145.712534 938.049701 C145.896829 940.748980 145.889719 943.461566 145.955423 946.168658 C146.107889 952.449664 145.428842 958.239093 142.300302 964.196490 C140.484811 967.653399 142.677988 973.158404 142.855356 977.749835 C142.918832 979.392657 142.359659 981.059527 142.084665 982.715411 C141.026315 980.785723 139.203744 978.905719 139.074625 976.915728 C138.833566 973.200885 139.649118 969.425982 139.859537 965.666949 C139.913614 964.700885 139.350778 963.700152 139.071329 962.715411 C138.084177 963.148639 136.376596 963.410357 136.226083 964.042804 C135.206583 968.326495 134.377100 972.669268 133.779413 977.033282 C133.492853 979.125567 133.679071 981.328936 133.976480 983.436236 C134.137781 984.579058 134.982065 985.625445 135.518320 986.715411 C136.315469 986.248370 137.303415 985.226886 137.872232 985.422808 C139.318033 985.920611 141.293130 986.661578 141.788675 987.838824 C144.267984 993.729571 143.055399 999.619220 141.645059 1005.664752 C140.578744 1010.235553 141.003610 1015.137652 140.514566 1019.866412 C140.251932 1022.406085 139.470926 1024.893023 138.901132 1027.398639 C138.799539 1027.845416 138.586649 1028.266681 138.425211 1028.699786 C133.969171 1024.111773 134.703897 1030.561114 132.786386 1031.396807 C127.321878 1033.778155 127.262750 1038.399859 127.819559 1043.438556 C128.036996 1045.406085 127.435754 1047.542193 126.859140 1049.498980 C126.190362 1051.768756 128.507852 1058.175616 130.727228 1058.992755 C134.494913 1060.380206 138.251840 1061.448321 140.064157 1056.121173 C140.329935 1055.340045 141.197580 1054.763751 141.786783 1054.092608 C142.161081 1054.937457 142.887155 1055.797198 142.852426 1056.624835 C142.631723 1061.881671 142.122385 1067.127520 141.944833 1072.384845 C141.779855 1077.269488 141.657754 1082.180987 141.983591 1087.049395 C142.282968 1091.522296 140.138467 1093.996417 136.443979 1095.733722 C135.461893 1096.195636 134.492380 1096.776568 133.682748 1097.490557 C132.570138 1098.471759 131.615228 1099.631915 130.592691 1100.715411 C129.698312 1098.621783 128.773233 1096.540484 127.919366 1094.430499 C127.236093 1092.741778 126.392099 1091.059649 126.094659 1089.294635 C125.909296 1088.194659 126.382181 1086.821368 126.952127 1085.786944 C128.629755 1082.741900 130.597238 1079.854571 132.223627 1076.784869 C132.565225 1076.140094 132.253488 1074.519976 131.698190 1074.134967 C128.886011 1072.185992 125.876474 1070.524249 122.978174 1068.695025 C122.282541 1068.256060 121.148431 1067.459185 121.227701 1067.002765 C122.422174 1060.123858 119.442804 1055.000201 114.964395 1050.154010 C110.944376 1045.803912 110.735910 1040.146197 116.625269 1032.381427 C118.463129 1029.958331 119.586328 1026.967852 120.858057 1024.156451 C121.226633 1023.341632 118.765054 1020.017779 122.447656 1022.661944 C122.652444 1022.809039 123.808923 1022.216021 123.830698 1021.917193 C123.884531 1021.178790 123.755014 1019.926715 123.316248 1019.728473 C117.610742 1017.150470 120.940607 1012.268512 120.722009 1008.573932 C120.436655 1003.749957 121.782999 998.846270 121.742609 993.982501 C121.727075 992.113116 121.281290 991.369952 123.495081 991.762164 C124.164606 991.880694 124.903406 991.608111 125.610467 991.514605 C125.338556 990.709918 125.316171 989.558917 124.755518 989.154986 C120.077173 985.783648 119.605829 980.882525 118.747278 975.651568 C116.949487 964.697589 113.680383 953.969012 112.190698 942.988360 C111.607202 938.687274 108.046014 933.530413 112.871042 929.253985 C112.385385 918.742572 112.388513 908.179217 111.277521 897.734332 C110.151666 887.149554 109.350778 876.790973 110.633966 866.054583 C111.897531 855.482379 110.909647 844.641131 110.909647 833.917926 C110.909647 826.527850 110.997552 819.136065 110.856439 811.748736 C110.813715 809.511798 110.821115 805.864703 109.636240 805.294818 C103.431955 802.310870 107.716669 798.232867 107.857126 794.560626 C107.945062 792.261493 107.453851 789.946002 107.342035 787.632098 C107.148920 783.635394 106.655130 779.600970 106.989969 775.641681 C107.732004 766.867999 109.044138 758.143634 109.863657 749.374896 C110.435663 743.254596 110.855676 737.093158 110.836832 730.951678 C110.814737 723.755877 110.184808 716.563556 109.961191 709.365313 C109.919031 708.008197 110.291025 706.499408 110.914606 705.288592 C112.316675 702.566241 111.995004 700.431231 108.909647 698.715411 M186.909647 555.215411 C186.909647 531.330157 186.946847 507.444781 186.865305 483.559771 C186.854410 480.363971 185.819864 477.146685 185.996164 473.980365 C186.383890 467.018328 187.835428 460.076739 187.766275 453.137591 C187.670419 443.519244 186.366830 433.919665 185.961160 424.296008 C185.419443 411.445056 185.067117 398.580279 184.951700 385.718585 C184.786661 367.332660 184.997232 348.943560 184.863809 330.557147 C184.814828 323.803820 184.164072 317.057086 183.927347 310.302447 C183.529336 298.944720 183.214883 287.583819 182.916849 276.222918 C182.553262 262.364123 181.963510 248.503588 181.982431 234.644458 C182.004617 218.394366 182.852670 202.144122 182.797037 185.895800 C182.767709 177.337909 182.068582 168.710376 180.802042 160.244403 C178.515665 144.961489 176.416269 129.568698 172.716409 114.598025 C166.895059 91.042910 158.319284 68.346255 147.273447 46.689311 C144.096689 40.460841 139.047067 35.042529 136.695077 28.583163 C134.717706 23.152659 132.057321 18.456614 128.939508 13.775790 C122.717203 4.434054 112.740930 2.658816 107.437372 11.007563 C101.160684 20.888171 96.147760 31.601893 90.998010 42.155040 C88.487283 47.300151 87.047006 52.957087 84.860254 58.274630 C83.455255 61.691195 81.698526 64.982119 79.883050 68.207553 C72.674524 81.014483 69.498071 95.135592 67.027841 109.349795 C64.494699 123.926104 62.468607 138.624072 61.029855 153.347888 C59.495950 169.045459 58.791238 184.829409 57.966440 200.588305 C57.624231 207.126452 57.779901 213.700763 57.947549 220.252490 C58.103357 226.341723 58.733560 232.419085 58.879785 238.508258 C59.297967 255.922351 59.611291 273.339251 59.891977 290.756182 C60.000284 297.477130 59.793603 304.203692 59.935709 310.923388 C60.173685 322.175891 60.694665 333.423022 60.874780 344.675952 C61.039255 354.952563 60.727243 365.237719 60.945291 375.512317 C61.505304 401.900622 62.343454 428.283191 62.866205 454.672076 C63.118127 467.388751 62.656580 480.121173 62.990961 492.834063 C63.251337 502.733538 64.458704 512.605487 64.843225 522.505206 C65.166345 530.824603 64.970743 539.167071 64.899042 547.498370 C64.590494 583.354449 64.294977 619.210772 63.877039 655.065692 C63.756235 665.428302 63.317529 675.789630 62.872003 686.144915 C62.700006 690.142352 61.806039 692.291461 68.315164 692.063128 C99.811395 690.958575 131.349542 691.051654 162.872720 690.709552 C165.244058 690.683795 168.105539 691.445819 168.012857 687.372515 C168.000650 686.836444 169.388803 686.268573 170.128366 685.715411 C170.388803 686.385821 170.540262 687.129351 170.931497 687.711932 C171.855051 689.087176 172.740640 691.346576 173.913370 691.532306 C177.220346 692.056048 180.667184 691.788470 184.051462 691.650531 C184.688425 691.624652 185.717630 690.844195 185.835672 690.263568 C186.342294 687.770648 186.863260 685.222674 186.866861 682.694049 C186.926858 640.534564 186.909647 598.374957 186.909647 555.215411 M24.409647 559.715411 C21.227884 564.897174 18.094919 570.109698 14.853448 575.253863 C9.364313 583.964862 3.857721 592.321490 5.670732 603.758075 C6.916589 611.617022 5.783174 619.835711 5.950319 627.888690 C6.080171 634.144732 6.792741 640.390765 6.864564 646.645587 C7.013803 659.642718 7.029459 672.644549 6.843072 685.640704 C6.779916 690.043841 8.222726 691.921344 12.801233 691.769915 C27.323648 691.289264 41.855218 691.086444 56.378274 690.621173 C57.244348 690.593402 58.766519 689.241046 58.806390 688.446063 C59.610956 672.397235 60.727289 656.342547 60.817850 640.283587 C61.078149 594.122515 60.909647 547.958941 60.909647 501.796405 C60.909647 500.629840 60.936975 499.462298 60.896127 498.297198 C60.879922 497.835162 60.712335 497.378558 60.613641 496.919452 C60.377985 497.352435 60.121316 497.775409 59.909891 498.219928 C57.194910 503.927752 54.899866 509.883075 51.696741 515.301837 C42.972498 530.060748 33.865182 544.593219 24.409647 559.715411 M239.909616 663.215411 C239.576303 656.525531 239.010385 649.837603 238.955392 643.145465 C238.817117 626.327655 238.787363 609.506732 238.969003 592.689837 C239.043161 585.827105 239.157968 579.236529 233.990945 573.702411 C232.150247 571.730975 231.275949 568.869281 229.903848 566.446124 C224.250955 556.462786 218.691751 546.423907 212.880960 536.533038 C205.280557 523.596026 195.996866 511.516253 192.897073 496.344622 C192.790109 495.821063 192.498727 495.335162 192.293314 494.831744 C192.165414 495.278338 191.947549 495.720904 191.927194 496.172320 C191.874704 497.335589 191.909647 498.502887 191.909647 499.668536 C191.909647 553.622210 191.953043 607.575946 191.864969 661.529498 C191.851053 670.051165 191.381753 678.580767 190.834390 687.088214 C190.642740 690.067218 192.211526 689.908160 194.073953 689.701800 C202.821939 688.732440 211.550241 687.551348 220.315195 686.783892 C224.777109 686.393145 229.314615 686.500384 233.794046 686.773761 C238.614816 687.068072 240.210855 684.989276 239.973886 680.369098 C239.698434 674.997515 239.909647 669.601092 239.909616 663.215411 M32.909647 119.215411 C28.319788 123.805270 23.907526 128.592181 19.092599 132.932360 C13.742456 137.754992 10.810586 142.778491 11.650461 150.659289 C12.720270 160.697772 11.909647 170.936648 11.909647 181.089145 C11.909647 188.852771 11.911066 188.904223 19.225915 188.703051 C29.574548 188.418475 39.923196 188.100207 50.264017 187.626056 C51.175409 187.584277 52.609811 186.414355 52.802621 185.546542 C53.423349 182.752642 53.671869 179.862048 53.889001 176.995517 C54.294183 171.646685 54.414194 166.272509 54.942239 160.937518 C56.173441 148.497821 57.256067 136.029803 59.005838 123.659121 C60.545770 112.772067 62.928369 102.004947 64.890955 91.176196 C65.212671 89.401019 65.287241 87.581057 65.476022 85.781787 C64.534860 87.012042 63.735925 88.393176 62.623544 89.441790 C60.147363 91.776049 57.349298 93.782550 54.976160 96.209826 C47.712839 103.638858 40.588205 111.203509 32.909647 119.215411 M202.909647 112.215411 C196.116312 106.088748 189.287393 100.000979 182.543253 93.820651 C178.595468 90.202914 174.780862 86.439791 170.911874 82.736270 C170.312234 82.162234 169.742441 81.557025 169.158853 80.966235 C169.228250 81.868426 169.150644 82.811877 169.390420 83.666247 C171.232217 90.229144 173.062692 96.796771 175.032877 103.321795 C182.631601 128.487628 187.603036 154.096255 187.819162 180.466372 C187.844247 183.530047 188.842905 183.890033 191.453500 183.765994 C201.140207 183.305743 210.855569 183.285800 220.513162 182.513140 C222.418863 182.360659 225.356699 179.814181 225.663950 178.005709 C226.416269 173.577578 225.909647 168.935534 225.909647 164.379580 C225.909647 157.657504 226.120065 150.926440 225.833627 144.216601 C225.651224 139.944323 226.210794 134.424929 223.853799 131.698504 C217.808420 124.705691 210.320718 118.959811 202.909647 112.215411 M135.909647 813.215411 C136.379159 813.684893 137.078653 814.646563 137.283914 814.550616 C140.735117 812.937823 140.061410 809.739093 139.807931 806.925616 C139.706766 805.802874 138.469980 804.782428 137.750162 803.715411 C137.136667 805.718768 136.459238 807.705828 135.942026 809.733722 C135.743265 810.513018 135.909647 811.385455 135.909647 813.215411 M138.909677 892.215411 C137.624307 890.834063 136.338937 889.452777 135.053567 888.071490 C134.672281 889.237323 133.944086 890.423968 134.012338 891.562823 C134.074060 892.592852 135.133005 894.465106 135.530344 894.408526 C136.876504 894.216754 138.124277 893.334063 138.909677 892.215411 M140.909647 899.215411 C139.039316 896.324542 137.578226 898.246722 136.461130 899.806353 C136.010629 900.435321 136.483804 901.725909 136.536661 902.715411 C137.994333 901.882098 139.452005 901.048785 140.909647 899.215411 M113.909631 705.215411 C114.585290 705.539752 115.260965 705.864093 115.936639 706.188433 C115.900659 704.170428 115.961343 702.142230 115.750589 700.142657 C115.706171 699.721331 114.666193 699.404864 114.084955 699.040118 C114.026529 700.054950 113.953027 701.069293 113.914804 702.084857 C113.888101 702.794146 113.909647 703.505145 113.909631 705.215411 M130.409631 702.715411 C129.822336 702.128131 128.773325 700.985797 128.715005 701.034320 C127.052209 702.417498 125.475488 703.906695 123.933359 705.427935 C123.798441 705.561053 123.996957 706.032183 124.040597 706.346331 C125.706827 705.802691 127.404413 705.336383 129.024805 704.679644 C129.734338 704.392047 130.286203 703.715411 130.409631 702.715411 M136.409647 915.715411 C137.168100 914.140521 137.975992 912.585040 138.612955 910.962481 C138.680978 910.789264 137.751047 910.224261 137.284067 909.841021 C136.825937 911.467364 136.364328 913.092791 135.915262 914.721637 C135.872995 914.875079 135.909647 915.050311 136.409647 915.715411 M128.409662 1065.715411 C128.769800 1066.715411 129.129938 1067.715411 129.490045 1068.715411 C129.963235 1068.439410 130.789072 1068.221270 130.845453 1067.877154 C131.037500 1066.704913 130.958292 1065.488116 130.982599 1064.288287 C130.291605 1064.597369 129.600610 1064.906329 128.409662 1065.715411 M135.909647 822.215350 C137.242960 821.876849 138.578104 821.544207 139.893259 821.145709 C139.913766 821.139544 139.688669 820.322528 139.578165 819.883929 C138.355325 820.327777 137.132486 820.771563 135.909647 822.215350 M129.409647 732.715411 C129.983148 732.808612 130.556634 732.901751 131.130136 732.994952 C130.846933 732.192035 130.735193 731.246844 130.225030 730.632281 C129.831918 730.158709 128.938242 730.100726 128.267114 729.857928 C128.481287 730.643756 128.695474 731.429583 129.409647 732.715411 M138.909647 794.215411 C137.932352 794.904803 136.955087 795.594195 135.977823 796.283587 C136.432382 796.738116 136.886911 797.192706 137.341501 797.647235 C138.030893 796.670001 138.720285 795.692706 138.909647 794.215411 M130.909647 922.215411 C131.466074 922.325640 132.022501 922.435931 132.578943 922.546161 C132.002832 921.416217 131.454004 920.269732 130.796884 919.188983 C130.746210 919.105670 129.933008 919.485980 129.474237 919.650836 C129.786035 920.339007 130.097848 921.027240 130.909647 922.215411 M138.409647 921.715411 C137.720254 920.738116 137.030862 919.760882 136.341409 918.783526 C135.886880 919.238116 135.432321 919.692645 134.977823 920.147235 C135.955087 920.836627 136.932382 921.526019 138.409647 921.715411 M130.409647 852.715411 C130.433588 853.382098 130.457529 854.048724 130.481470 854.715411 C131.290872 853.906024 132.100259 853.096637 132.909647 852.287249 C132.242975 852.263324 131.576318 852.239337 130.409647 852.715411 z" />
                    <path class="selected" opacity="1.000000" stroke="none" d="M154.909647 733.715411 C154.324045 731.134356 153.432504 728.176410 154.407388 726.091204 C155.190073 724.417193 158.235239 723.801043 160.276407 722.715411 C160.451578 723.251300 160.878610 724.193927 160.765329 724.264056 C157.238412 726.448321 156.342355 730.088214 154.909647 733.715411 z" />
                    <path class="selected" opacity="1.000000" stroke="none" d="M127.659616 1193.465411 C126.242960 1193.458209 125.076288 1193.200763 123.909631 1192.943438 C124.754022 1192.523028 125.878488 1192.312579 126.383844 1191.638140 C127.403802 1190.277179 127.929315 1188.540118 128.974802 1187.205767 C129.516382 1186.514483 130.733194 1186.352130 131.644968 1185.950763 C131.787103 1187.318438 132.510431 1189.049884 131.935297 1189.968463 C131.070718 1191.349566 129.296869 1192.161456 127.659616 1193.465411 z" />
                    <path class="selected" opacity="1.000000" stroke="none" d="M124.159647 1126.465411 C124.049249 1128.048785 123.688867 1129.382037 123.328470 1130.715411 C122.313013 1130.006182 120.461450 1129.327716 120.434167 1128.582232 C120.341302 1126.043902 120.856821 1123.476031 121.274194 1120.941607 C121.302118 1120.772052 122.518472 1120.588214 123.048212 1120.780352 C123.446619 1120.924517 123.830606 1121.644854 123.871225 1122.137408 C123.982660 1123.488604 123.909647 1124.855059 124.159647 1126.465411 z" />
                    <path class="selected" opacity="1.000000" stroke="none" d="M132.659662 1139.965411 C132.467935 1142.657183 132.124124 1145.123980 131.507959 1147.520953 C131.372736 1148.046954 130.268457 1148.323809 129.610422 1148.715411 C129.376810 1148.031207 128.977151 1147.355304 128.941751 1146.661090 C128.847360 1144.809405 128.693079 1142.917071 128.967157 1141.102008 C129.275522 1139.059893 130.233179 1137.609820 132.659662 1139.965411 z" />
                    <path class="selected" opacity="1.000000" stroke="none" d="M131.659647 1134.465411 C130.711237 1134.017047 129.600824 1133.414752 129.410104 1132.597857 C129.116968 1131.342364 129.207880 1129.850909 129.640039 1128.639361 C129.830987 1128.104205 131.257700 1128.009967 132.123392 1127.715411 C132.385461 1128.867877 132.867319 1130.024859 132.844003 1131.171466 C132.823251 1132.191973 132.242990 1133.201251 131.659647 1134.465411 z" />
                    <path class="selected" opacity="1.000000" stroke="none" d="M120.659647 1145.965411 C120.242975 1144.632159 119.890649 1143.535846 119.965509 1142.469561 C120.031198 1141.534015 120.575983 1140.632159 120.909174 1139.715411 C121.772852 1140.412188 123.427774 1141.216265 123.350595 1141.785601 C123.126337 1143.440265 124.526590 1146.363116 120.659647 1145.965411 z" />
                    <path class="selected" opacity="1.000000" stroke="none" d="M196.659647 478.465411 C195.621011 478.926776 194.832407 479.138140 194.043771 479.349505 C194.289102 478.348101 194.342783 477.233355 194.845132 476.383929 C195.197519 475.788104 196.161783 475.554095 196.852762 475.158526 C196.871744 476.177508 196.890695 477.196429 196.659647 478.465411 z" />
                    <path class="selected" opacity="1.000000" stroke="none" d="M47.909647 248.715411 C48.133554 246.105975 48.357461 243.996569 48.581369 241.887133 C48.690805 243.992999 48.802454 246.098712 48.907358 248.204821 C48.923807 248.534930 48.949167 248.872241 48.902826 249.196551 C48.695398 250.648333 48.463525 252.096667 48.240457 253.546222 C48.130182 252.102618 48.019907 250.659015 47.909647 248.715411 z" />
                    <path class="selected" opacity="1.000000" stroke="none" d="M208.659647 711.465411 C207.922708 711.715411 207.428445 711.769671 206.950235 711.705096 C205.599832 711.522540 204.256052 711.291278 202.909647 711.079242 C203.050333 710.650592 203.274850 709.838641 203.319681 709.848529 C205.193063 710.258197 207.050363 710.741351 208.659647 711.465411 z" />
                    <path class="selected" opacity="1.000000" stroke="none" d="M88.659647 705.465411 C87.654031 704.804339 86.603815 703.984027 86.282114 702.939349 C86.145990 702.497332 87.541650 701.583514 88.241037 700.884112 C88.463892 702.327838 88.686761 703.771624 88.659647 705.465411 z" />
                    <path class="selected" opacity="1.000000" stroke="none" d="M339.909647 692.715411 C338.242990 692.470172 337.076303 692.224932 335.909647 691.979693 C336.571573 691.558307 337.347604 690.681964 337.870828 690.813189 C338.857645 691.060748 341.758646 689.299212 339.909647 692.715411 z" />
                    <path class="selected" opacity="1.000000" stroke="none" d="M195.159647 325.965411 C195.825235 326.966479 196.240823 328.217578 196.656412 329.468646 C195.874582 329.518023 195.092783 329.567370 194.310953 329.616717 C194.510538 328.482959 194.710092 327.349170 195.159647 325.965411 z" />
                    <path class="selected" opacity="1.000000" stroke="none" d="M10.659647 699.965411 C9.716440 700.688861 8.523248 701.162371 7.330041 701.635821 C7.189905 701.211871 7.049768 700.787982 6.909647 700.364032 C8.076318 700.147845 9.242990 699.931659 10.659647 699.965411 z" />
                    <path class="selected" opacity="1.000000" stroke="none" d="M53.159647 701.465411 C53.721399 701.027179 54.529962 700.765094 55.348321 700.729693 C55.472101 700.724322 55.641580 701.773639 55.789911 702.335162 C54.996484 702.128558 54.203073 701.922015 53.159647 701.465411 z" />
                    <path class="selected" opacity="1.000000" stroke="none" d="M125.159662 1117.965411 C125.833612 1118.624835 126.257562 1119.534137 126.681497 1120.443560 C126.120004 1120.396563 125.180399 1120.515948 125.072168 1120.269732 C124.811166 1119.675860 124.938776 1118.911212 125.159662 1117.965411 z" />
                    <path class="selected" opacity="1.000000" stroke="none" d="M34.909662 521.715411 C35.790613 520.763018 36.671564 520.310687 37.552545 519.858294 C36.671594 520.644000 35.790628 521.429705 34.909662 521.715411 z" />
                    <path class="selected" opacity="1.000000" stroke="none" d="M197.159647 386.965411 C197.040475 387.715411 196.689981 388.723925 196.249063 389.691241 C196.226114 389.741504 195.432046 389.440295 194.997018 389.302752 C195.634561 388.606982 196.272104 387.911181 197.159647 386.965411 z" />
                    <path class="selected" opacity="1.000000" stroke="none" d="M197.159647 368.465411 C196.930490 367.527911 196.951334 366.840411 196.972147 366.152911 C197.430490 366.319598 197.888803 366.486254 198.347147 366.652911 C198.034677 367.340411 197.722177 368.027911 197.159647 368.465411 z" />
                    <path class="selected" opacity="1.000000" stroke="none" d="M124.659647 1155.465411 C123.722147 1155.694415 123.034647 1155.673663 122.347147 1155.652911 C122.513818 1155.194537 122.680490 1154.736285 122.847162 1154.277911 C123.534662 1154.590411 124.222162 1154.902911 124.659647 1155.465411 z" />
                    <path class="selected" opacity="1.000000" stroke="none" d="M180.159647 435.965411 C179.702737 434.755664 179.495828 433.295916 179.288888 431.836139 C180.829141 432.350085 182.369394 432.864001 183.909647 433.377948 C182.742990 434.157122 181.576334 434.936267 180.159647 435.965411 z" />
                    {/* <path class="selected" opacity="1.000000" stroke="none" d="M152.909647 89.715411 C156.454050 97.006259 155.805887 103.817355 152.536050 110.392474 C151.934305 111.602481 149.641946 112.576419 148.099832 112.621173 C131.409296 113.105426 114.712854 113.389895 98.017480 113.700091 C96.724588 113.724124 95.363962 113.752414 94.143167 113.401614 C87.351739 111.450000 85.988565 109.405246 85.894479 102.102313 C85.639001 82.270633 92.592218 64.936679 104.000299 49.090617 C106.102502 46.170626 108.048379 43.125155 109.884256 40.029582 C112.257898 36.027247 118.416956 33.404536 122.556497 34.897036 C123.401422 35.201678 124.445474 35.646449 124.857996 36.345248 C127.458185 40.750140 129.766870 45.330310 132.439447 49.688472 C135.795206 55.160739 139.898630 60.226367 142.788492 65.919665 C146.613748 73.455737 149.576303 81.429675 152.909647 89.715411 z" /> */}
                </svg>
                <h3>we're launching something epic!</h3>
                <form className="email-form" onSubmit={this.onSubmit}>
                    <div>
                        <input
                            type="text"
                            placeholder="Type your email address"
                            className="landing-page-email-input"
                            value={this.state.email}
                            onChange={this.onChngeEmail}
                            disabled={this.state.disableInput}
                        />
                    </div>
                    <div>
                        <input
                            type="submit"
                            disabled={this.state.disableInput}
                            value={this.state.message}
                            className="email-submit-button"
                        />
                    </div>
                </form>
            </div >
        )
    }
}
