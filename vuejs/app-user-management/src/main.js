import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";

import AppModal from "./components/AppModal.vue";

const app = createApp(App);

const store = createStore({
  state() {
    return {
      userList: [
        {
          id: 1,
          name: "Nguyễn Phong Hào",
          avatar:
            "https://pdp.edu.vn/wp-content/uploads/2021/05/hinh-anh-avatar-nam-1-600x600.jpg",
          age: 23,
          description: "thân thiện , hoc hỏi nhanh",
          programmingLanguage: ["JS", "JAVA"],
          gender: "Nam",
          type: "ADMIN",
        },
        {
          id: 1,
          name: "Phan Thùy Duyên",
          avatar:
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFRYYGRgZGRwdGhwYGhgZHBgcHRgaHBkaHBodJC4lIR8rHxoYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHjQrJCs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0P//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAABgMEBQIHAQj/xAA9EAACAAMEBwYFAgYDAAMBAAABAgADEQQSITEFBiJBUWFxMoGRobHBE1Jy0fBC4WKCkqKywhQj8TNz0gf/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAgEDBAX/xAAjEQEBAAICAwACAgMAAAAAAAAAAQIRAyESMUETURQiBEKR/9oADAMBAAIRAxEAPwD2aCCCAIIIIAggggCCCMXSWnkl1VNt+AOA6t7CA2Yy7Zp2SmF68eCY+eXnCnbtKTZvabD5VwXw398Z9vcyQC6sCwqoyJFab8h9jAMdp1nc9hFUcW2j7D1jNnaXnvnMb+XZ/wAaRg/8xycgtd2Z7zlHDTiTQkxPlFeNakycT2mJ+o19Y4+IvEeIjNMRkPxA7qw8m+LXBrlHaswOBIPKojFUOMQ2PKg9osSbfMTtgOOPZb+oe8Z5Hi3JOlZydmY/ebw8GrGjZ9Z5i9tVcctk/byivY7crpW6k1eDgB15XqZ9fGLFnstmnkiWzJMGaEg07jn3GNmUrLjY2LJrDJfAkof4sv6svGkaysCKggg7xCTa9AzUxUBx/Dn/AE/asVLJbpko7LFeKnLvUxSXokEYGjtY0eizBcbj+k9+7v8AGN0GuUB1BBBAEEEEAQQQQBBBBAEEEEAQQQQBEFptCopZ2AA3n0HExxb7aspSzHoN5PAQj6Q0g856tl+lRkOnE84C5pXTrzKqlUT+5up3DkIr6P0S83EC6nzH/Ub409E6CpR5wx3Lw+r7Rf0hac0XBQNo5fyjlx8Im5abJtk2q0SrMuwAz5X22iTvuj3y6wr6RtbzmvzGvEAAYAUAJIyA4mO9JWr4jkjsjBekUlfCp/OERva5JEU2uDJu3e0fEnhv4W4H8xiZhTEd49xA6K4xxEGvqtxwP5lHRMZ8wsmRvKMwcxz6dI7S0gjGoO7Jh9/WAsPTjQxZsFrRCPiKeTDLvEZjTR+H7wf8rZu3hdONDx49YDX00UWjSTcLCt5DsniCBGJJtTo99TR177w3g8Y+OcM/zlHJ5+MB6Lq5rMs1Qr4MM65jnzXnmOecb1ssEuaNtQTuYYMO+PKLBOuMCQSu8KaN1U7mG7wOBMehaEt7ArLdgwYXpTjAOvTcdxXceREbKjKM/SOhHl1ZdtOIzHUe4jjRemHkmnaTep3fSd3pDnGLpXQavV5dFfeMlb7GLlS2LFbUmreQ1G8b1PAiLcedWe0PJeq1VhgQd/IjhDrovSSzlquDDtLvB9xzjRoQQQQBBBBAEEEEAQQQQBFe12lZalmNAPEncBzicmEbTmk/jNRTsL2efFvtygK2kLY097zdFUY0G4Dn6ww6F0OJYDuKvuG5P35xFq9ou6BNcbR7AP6Rx6mN0mJtFa32m4uHaOA9z3faMS1rVGA3qR4iO7dabxL9yA8N3icenSPi5Z194529uuM1CVMFAePvHLLkOfoP/I39K6LvbaZ4VHHpzjEnSmVgGUjPPujdj5SKvwzeJU0NT0OWYi1HKIScATtbuaiAqTndSGu4jeMfzocIhm21GxKBW30BUH+UggdxjfSwMRiQOWZgNjXeK9aRjS98ZPl8MfRo4M5Nyt4U9TGva7MgyAqeQjPeSDhlz4HdGsV5bVyB6nE+US3TuPcfvFZaq3P1i3gw/KiAK3cwV81hi0Hab8l5ANXSs2TxDLi6jqK+JjFlTioo4w3N947dQhV0N1gahlwPUfnGM2aep6MtXxZSP8yivXf5xbhY1OtqCWJRNGvErXJgadk92UM8XHOzVZultFrNFRQOBgePI8vSFWTNeTMqKq6mhB8weIMPkZOm9GfEW8o21GH8Q+XrwjZWNLRtuWcgYYHJhvU8Iux59ou3tJe8K0ydeI+4h9lTAyhlNQRUGKEkEEEAQQQQBBBEU+aFUsclBJ7oDC1o0jdX4SnaYVbkvDv9KxkaB0d8R7zDYTP+I7h7n94pT5rTphbNnbAdcAO4UEOtgsoloqDdmeJ3mMtFiM7S0zZCD9efJRn45d8aMY1pq8wgGmGfygYlvMd8RVT2W9P2sJiM0wX62Hsv+UT6P0gGCAnErU9cAPeMPWcN8UAghaVXnXM9d3dGfZnoDTiPKp94nTps9zhW71P+LRxaJYJUkVGPnGE+nnuqFG0M2PQjARLO05sEFTeFCKZHeOkZprUazJ8i+AiqygFwKfpPlT/WIrFpa/26DpkMMPHGM212hvjF0LXaAE7szTDhu7+cBqvhQ7t/fv8AGkZU62Vc/LkOI5x21tcowu1IBy4AVOHSKSJhnhx4jjAdyFLuqs1KkCp3DeYjnWcoxVhiDQxNLSh/N8dNLrjv/PKN2xn2my3hhmMvtFVFxHONgDdviCbZs6cajrDY+FxS64wO/d+0UrRLuiqNVTlTH87o1FAZeRGIjLtNhK4qTd9IxrRsUwUVhUXeGeG7rHoeibcWojmpoGRtzqRUHrT34GPMdHzdorxx7/z0h00KSbPLYdtJ5VOJW8CR0AJ7lMbE5To3wR8BrH2LcixrJo66fioMGO3yO49/r1iXVbSFD8FjgcU5Hevfn48Y3p0sOpVhUMKGEa0SmlTCtaMjVB81PpFSj0aCKmjrWJstXG8YjgRgR4xbjQQQQQBC7rZa6IssZuat9Iy8T6QxQgactN+e53A3R0XD1qe+Au6sWS85mHJMB9Rz8B6w0xS0RZrkpF3kXj1OP2HdF2Jo+OcIXp1puJaH4m6PpW96gGGB93X94TNLkhHUZUbDmC49onJWMKc+1O9S5vEkEk8gQAOAxOEcygKEUxvZ8qCg9Y6RM+UdIuf5vjFpZMtTUMaYVFN5BGHhU90TPIqt4Y4eNI5SXiPz8wPlF6wyWUFWoVqSpHDepHEZ84m1UjPs65U4U9x7xr6NkgsVYbLqVPkRTwjhJCKi0IwwNCK54H08otWdxUEFTTGhqtYz2a0qtZmRiOefPd4gxYXRIMkMoAuEhq4Kd+PCoI6+cXZ5L0IQkY5VN5eFaUJHWO7BLS+C+0jczQHcSBwxFeZrlGl6YdxR2bzcVptJ/wDoc4hdzuVjz3HrD3aNFS2xQhGGRSmHhGVa9EviaCvEZHqo9R4Q3omr6Kpdjmh8fakfL2Fce8E+cXrQhU3WUqfEdxGMVZuANadx9oCBmpiFJ40rjzxGcCkcxy/aAzlpW8aV3Dv3iKs2eDvcbwc6ciozEBKSobZpfbAVpgOJ/MYbdUwiOQSSxFNrAqc6U4HjvpCHKoXoRz5seufjDFo92V1CklgKrvIA2iK8MK/ywL3HoqHEjp5/+R3EVmYFQwNbwDV41ESx0cBC/rRZKqswZjZbocj4+sMEQ2qQHRkP6gR9j4xsGFqla6M0snBtpeoz8qeENkec2WaZcxW3o2PcaMPCoj0RTUVEUOoIIICtbZ1yW7/KpPeBh5whaPk35iKcasK9Bi3kDDdrPMu2dh8zKPOvtGFqxLrNLfKh8TQelYUNkEEEQOTmIT9YUoXG4zF/uoaeLGHA5jofaEvWeaVDHjPXwDAf6xmSsfZcyDH+LHygRalgOXnU+kfENVcbwW96ekFh7R4UqelCPzpEOi3Q1UAVN/w2DnDBZNCM8sOzV2moo3UYivM1Biho+RsXgKkuVUcTjX+6g8Yb7MwlS1Vj2Vx5nNj0qTGWt7+MWxIqEq6ijYE0x30ZeOeK+XGyuigtTS+hxVlJLLzA3jiBj7yWnSdmPa+G5O43D5mo84u6NtiNsooXCuF0qejKSCYRl3O4r2exuuGDKcaZd6nc3IgVjh9EVJZSyb8t++q7+oMbkDCN0nypXn2qVZg1Wqb1GzpeIBpdFLxpTPLCpxjDtWuTXiFWoHyks39oovfWN2fq4HcBgbim9VjW8a4Y8TQkn6RxjP0locG0soN1RLSgQADNxhuGUJjv2q5STpi2fWkOxE9C25akrcG8hivawzwwi84DIzoxKCla3SwvYCoU5cz5xXOhhfmAqaoKoxyrSoOFPwGGE6tWdpbTVQq7y7xVWZUvXQTsqQMSAaQuOvTJnsnTPhscXAPChBr0JihMtKKSFvE7mYYDmuHnjGslluteGyVYUIJ4bJ8vIiKumZZEx2K3akErmBeFarxStaU3UgpRlTQGDjaIwHCpwzja1btl13rQtMBQOeylaAt4bv3jEs0m811RQYHpiK0jas128iDcfQEk+g74D02TLCqqjIAAdwiSKtgqFuE1KYAnMqRVT4YfymLUdHCiCCCAS9Pybk9uDUYd+fmDDXoGdfkId4F0/wApp6ARia2S8Uf6lPkR6mLeqEyqOvBgf6h+0VAxQQQRoXNcH2EXixPgKe8VtU0/+RvpHqYk1xOMofX/AKR1qoNh/r/1EZRuwQQRI5OY6H2hes6LNc3hWpmAV3XgaEfykxt2tCwug0BwYjOhww5mue6KFvl/DZHQbIuig3XeHVSR3CMqo81Mwo5DZkENyP6vMNHyZaiEogoK0JOLHGhPdF/W+w3LSzDsOL6kZUfP+6/4iM2yqCoZhVb4rzF5faJrpLt6BYAqyVnKhaibCgiowxO0QOpzwhds9ne2O0w30SuTNgTu2AStfzfF6xXmkTLKt+oZhLIK1dGF4KWalCAxHPMb6M2g9FiTJRGAvKorTINm1O8+UTJ225WPMLLo6bMJO0tGKnbyIwI7ukbWrdmmLOZVmNeWuzWl+grStKZZVHDjDJpix3JgKILkxiXZakh8O1uCkDxgsEoNMUoBUMCzAbgRUFumEXdacvK72ZVOEfYI4vRLZNu4ztKE7JBagrVQCa8O8EecaMFI3emdfWEtnZ1IusoIzNI07JKIAByAA8otRzMe6pJyAJ8BWM7vtssk1ISLZZgruxBMq8VYpiVNa0p1GB50GMKtotZc1BJuKVuscQlSR1GOPAxv2rSgFlorf9s4MzLj2GN5SeBxH9ULqzL+2uDriw3MMiaeRHOEdL7VVnlagVBxAFKHpWNXVqxF50pz2ATixuhmXAS/4RU44esZ1rQUVlGDZcQa0K9xhx0TIvg4bRIV/quko450V0biLpzjYynKRKYFmalWpgMgBWgxzzOMTxR0TaC6Y4suB54YHrTzBi9Fxyoggggxi60JWUDwceYIirqe+3MXioPgae8aGsY/6G6r/kIytUj/ANzfQ3+SRUDlBBBGhW1xGMro/wDpHeqh2H+v/UR1rguzLbgxHiAfaINU3wmDmp9R7RlDFBBBEj4wqIjIDAqwruI484lippJ7qMQaNSingTh+9OUK2EXSOjGnzZqS2NxQSGc1CItTSudGa9Qc67owpZuyVWnaYeAIqfEecPNpAk2NzQXpwoDXHaW6oI4BBXx4wp2XR7TbPMnItRLKqAM7lDfNOOKN0ERp1lbGhLWrEq7hWYIqHIFkUAEn9LGoxyJ6w4WG0FwVYUdcGBFK8GpwP3jzCRtXRSpIa8OpoMP5R4xr6O05aEmy74Z5aXlqAWa6adsgEkLQkHhWsTdRurXoHwARQ1I4EmkTIgAoAAOAwgVgQCMjH2Nc7diPl3GPsfCQMThBj7BHxWByNRyj7AEZGtVpuWScQaFluLxvOQop/VXujXhM1v0svxZcoEES3DvjQFgDcQ9xJ8INxm6yrPo1pqK7rUMpWWqbwopRbtdofMcNndSFqaTLmCtQwzBBBNMGqNx+8NT6xspdlW45bYyK0oADlQ4XsoUrTPLzHmOSWIruqTU17vvyjnhL3t1tXJwC31GIqrLTjUe3+MNOq2j5xmrMYsEG0TkporKoXj2zjlgYT5r0mXTjQAHnsgHpvj0zROjGMmX8V37C1SpAXAbJrXLLdHWJyuom0VMHxJlOy20vS833rGvFORKUEBBRQSSc7xIpSpz68ouRccqIIIIMZesR/wChuq/5CMrVL/52/wDrP+SRoazvSSBxceQJinqgv/Y54IB4t+0VA3QQQRoxdaZdZBPysD7e8Yuq8yk1l+ZPMEH0rDTpGRflOu8qadaYedIRtFzrk1G3XgD0OB9YUPcEEEQCM3TfYHU/4NGlFLSqVlsRjd2vDPyrC+mz2WtckJ+HKX5Gp4qvjQU74r6uTybMZEkVmTHa8RgJakBasdxoMBzrwrpabkGekhpfbF7I0wVasvW8BSJNSZi/BZMAyO1RvocQeOdRjwifqv8AUu2jQxSbNu7aSghYZEVUNgB+nAjkCOcbT2x1lf8AIkBBtEMp7IBCilKDeFxBGJjQsOzbrSD+tJTDmACp84vvouSQRcABNSFJUE8aA0rE3HbZl+2Jq3p9TSVNIU12DkpHy45EQ1Qh27VCbfBlFGSuN4lcK41FPTyi/Zpdus9FRfir8pe8O52usPMQ1YXV9G2K1tsKTLt69smoozAV5gGh74yU1qkB/hTz8CYKbLlSvc6kr40yMbsuYrAFSCDkQQQe8QT3O0dnsyrUqMTmeNMomgZqYmFHWDWq7WXIxNbrP+lDvA4n08KrdNkuVX9YdPfDpKk7U9yqgDEJeYC83jgIT7ZKQAh0oRVndmvM7b6AYU8TjgYs6MsrYzBUkslwt2ncuovk+AAjjTskmrDsNS4TlsqFungQVxHOsJdulxmPTFtMkXBcF0GpugkioO8dK+MVZcm4AxOI3c9wHlXpEn/INCgFMxUjNqmp7vaOZz3ipGW4ft1phygNnViyi+ZrCrjbUNwXMkb+PIYjLD0eTtqGJqCK3RgOh4wjasqwmIzml0szk7lKsMetQIctDpRGFNm+xSvyk18IqOeS+BH2CCKQIIIIBd1smdhPqb0A94n1Pl7DtxYDwFf9oydYZ16cRuUBfc+ZPhDNq7JuyE4tVvE4eVIqDUgggjQR59pezXJzrurUdDiPWndHoMLOt1kwWaN2y3TNfOvjAaejbTflo+8jHqMD5iLULWq9qoWlnftL1/UPCh7jDLE0EEEEYMmfZGlsHlioH6OFcDTl6c9y/pEsk1p4lzZZOIa7s3smVqZqwAzAxh2pFeeHIKqAKilWoQOd3f0wjNKlLZ0whtFnnhXQOplsXQhSr0KEPkaOAO+GyMmVolFV5N0mSyAFTiA2NSp4kUOGRFY7lTnkhVmVZaABxiVNOy/swz30OJ2F79NOCOUcEVBBHKFbWbWZ5DmVKUFwAWZsaVFQAK50xx84W6McbbqFz/8AoOjQySp2N8zZqkgOcC9VrdxoAp8YUdHzLTKb/otDIP4GF2vAyzRfIGNqfpe02mZLlMpoGdwtFpgjkmoAFdqgziC22e8d4ONag4U3fMfLpHK16McetVdtWnLZMUS5k9SKVrLBRmPBq4DfiDxIyi1oeytNCDAImL3RQHeFHHj5xQ0NYXd1UgjZBIpQKNxOAwwwG8jlg72eQqKFXLzJOZPOJqta9ObQQiBslRkc8lR1ZvJTHzTVpkGQzI6X2ZbwV6EhnxDKDjgd4yESzVUqwal0ghq5UpjXlSENLMQ5AYMikhGxqwyBIPL847MtJuPldrD3UN1sjuwpyNDhvyipZrQoJNyhBOPvQ1+8X5dhebshbxoaXSLxAGIAOeGNM8DFOVo12mrJli++JunZK0zLBsqc4qdou51TjoCfLS7VVcMe3QEqxoMPLDPmYc4WdXdWTJIeY4Z8wq1uqaUqa5nuEM0XI5ZWWiCCCNSIjnTQis5yUEnuESRh6zWu6gQZvifpH3PoYBclq02YB+p282OMeiS0CgAZAADoIU9VLJemGYckFB9TfYV8YcIsEEEEARXtdnDoyHJhTpwPcaGLEEB5wC0qZwdG8x7H3h4ss8OiuuTCvTiO4xja1aPynKOAf/Vvbwipq5pC43w2Oyx2eTfY+sZYGqCCCJBBC7pvWZJTGXL23HaoRdTkTjtcgDzpCxbLba5mJmlR8qFlp31r5xGWeMdceHLLs723TtmlMUm2iVLYUJDzFQgHI0Jyi6k1HS8rKyEZggqR1ypH5x1xlTP+SzTGZmdVIZiSaBbtK90bmgZkydZlQO7LLqLhNVwywPKkVcpMfJmPHblcXpraxWeztMDMTtUVEF4ml7EHKlABid0JOkbf8aa80i7fbKtaAAKBXoBFBiTnH2lY5XLb0Y8cx7W0ehBBIIyIwIi9L0gSR8RFmDfXBjwxGBpzHfGTLrl67++J0mDI1BHH1rEt0brJb7PQ3WRKmpVqIxPT9XUVjmfphB2AWP8ASPPHyhYVgeBHjEisBGWtmK5bLW8ztnD5Rgvhv74qO0T2aUW2iMN1cPLOLJsiVqVqfDyGETclzFW0fa7rVqFoQyk8QeH/AJE87TBFqNpUC8twOFNQ4IKuMcqgL0NIg0iyqoAArn0AijZpRK1P6xXuvrj6xWFrny4x65Zp6uoZDVTkYljy9bdOkhTKdl27pApdNeKnCuXjG1I1jtCnaKMN9VofFSPSOv5JOq4fhys3DtBC3Z9alwvy3HEoQ4HOmB8AY3rLakmLeRgw4jceBG48jFzKX0jLDLH3EjuACSaACpPADOEa32kzZhfHE0UcslH5xjZ1l0hh8JTni/Tcvv4RDqxo+83xGGyh2ebftn1pFyIMWiLH8KUq782+o5/bui/BBGgggggCCCCAjmIGBUioIoQd4MIml9HmS939JxQ8Rw6iH+KekbEs5CjdQd6ncRAZWgtJ/EW4521H9Q49eMV9ctItJkC4brO10EZgXSSRzwpXnGHPkvJehqrqagjfwI4iOdYbZ/yPgAggqWL8K0ShHUXo559Y2r4pvKSsvR1kurePaOPSvvF+OI+1jxV9Ipa+2WqS5g/SSp6NiPMecUNSLVdnMhydcOq/sfKGzTtnDyHQ7x4cD3Gkeb2C0mVMR8dhsRyBow8Kx6eP+2FxeTl/rySvRtI2Gu2o6j3EZbS94hmU1xGUULZY/wBSDqvHmOccJfj0WMpDWJK8Y7H/ALH25w4RezTkRoWKy122y3DjzMc2Ky12my3DjFycWOCDvO7pziLSR1NnKuZjJfSLqzEJUHLPLdjlF5LEM2N488oJkhE2gowONeHHHCEsbYoWaytNa/MOAzX78o+2i1BuzTEgL9IIr7eMQaTmFzsY14ECnIkYMOUV5Njwoa86nPwjpjqd1xy3l1IYJyhpdP1G+4G8CqBD3lKxIy1oRvipYENbxGda7twAA8Iurwjnld11xx8ZpzLGH5uMSWSa8t78tirZMM1ccGXI03HMeIiNBSvU+FYmkymZgqirE0AG+OnFhbd/HLn5JJ4/U9ks7TpgUYsxqzHcN7GHyy2dUVUUUAFPuTzMVND6NElKYFm7R9hyEacet4hBBBAEEEEAQQQQBBBBAZ+lNGrOWhwYdlt4PuOUI9rsrS2KsKHyI4g7xHpEVLdYVmrdcdCM1PEGA86fcef7e8cT+yekauk9FPJOO0m5hl38DGZNSoIG8R58+H7i9XHz/Mv+hkvKRXBhyjzjTVkuTDhg2P8AMDRh40PfD5Zke8oYHYWnXDOsYmtljqrMBiu2OmTj0PdEcV8ctV15pMsemlqva79nWuabB7uz/bSNcmEjU22XJrIcnGH1LUjyveAh2IieXHWVbxZbxiCbZlbEYGKnw7poRh+eUW2ahjuoYUOcQ6O5eAESREgph4faO4xrqOWUHMA9Y6jmAqzbApNQSteFKeEfZVjUZ1PX7RYMfI2bZXVY4YG+CBhQ1PoI6pFzR+j3nNRRhvY9le/jyjvhw/cnn5OeeogkSWZgqgljkBDnoXRKyVqaFyMTw5Dlz3xPozRqSVouLHtMcz9hyjQj0vHbsQQQQBBBBAEEEEAQQQQBBBBAEEEEBwygihAIOYOIML2kdW1arSTdPynsnod35lDJBAeb2myvLN11KnnkehyMUbXZQ4oefeCKEGPUZ0pWFGAIO4iojFterMtsUJQ8O0vgcfOJuMy9qmWU9V4nN0DaZLh0S+Ea8pQ1OBqKrn1wh6kTL6q1CLwBoRQioyIO+Nq0auz1yAcfwnHwNIzZ1ndO2jL9QI9Ynk4/JfFy+CtMl1iP4RieCOP4Mv27/wAjH9VG6EqRWh4xFKtVNl8CN/GLNI+OgOYB6w/BkfyMf1XStUVEBjuVJZsEUt9IJ9I0bPoGe36Lg4uaeQqfKLnBPtRl/k35GVEsiSzm6iljwArDPZNWEGMxi3IbI8c/SNyz2dUFEUKOQp48Y6Y4Y4+o45Z5Ze6XdG6s5NOP8qn/ACYe3jDJKlKgCqAAMgMBEsEWgQQQQBBBBAEEEEAQQQQBBBBAEEEEAQQQQBBBBAEEEEARxMyMEEAkac7ffGXBBBoi5oztiCCND5ZuyImggjGCCCCAIIIIAggggCCCCAIIIIAggggP/9k=",
          age: 22,
          description: "thân thiện , hoc hỏi nhanh",
          programmingLanguage: ["PHP", "C#"],
          gender: "Nữ",
          type: "CLIENT",
        },
      ],
      searchName: "Hào",
    };
  },
  getters: {
    userListByBoy(state) {
      return state.userList.filter((user) => user.gender === "Nam");
    },
    userListBySearchName(state) {
      const { userList, searchName } = state;
      return userList.filter((user) =>
        user.name.toLowerCase().includes(searchName.toLowerCase())
      );
    },
  },
  mutations: {
    setSearchNameMutation(state, payload) {
      state.searchName = payload;
    },
  },
  actions: {
    setSearchNameAction(context, payload) {
      setTimeout(() => {
        context.commit("setSearchNameMutation", payload);
      }, 500);
    },
  },
});

app.use(store);

app.component("app-modal", AppModal);

app.mount("#app");
