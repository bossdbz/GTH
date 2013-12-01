Shader "Aeroplanes"
{
	Properties 
	{
_Diffuse("_Diffuse", 2D) = "black" {}
_Normals("_Normals", 2D) = "black" {}
_Specular("_Specular", 2D) = "black" {}
_Reflection("_Reflection", Cube) = "black" {}
_Gloss("_Gloss", Range(0,1) ) = 0.681
_Colour("_Colour", Color) = (0.5895523,0.5895523,0.5895523,1)
_ReflectionStrength("_ReflectionStrength", Range(0,10) ) = 1
_SpecColour("_SpecColour", Color) = (0.5895523,0.5895523,0.5895523,1)
_Fresnel("_Fresnel", Range(0,10) ) = 1
_FresnelStrength("_FresnelStrength", Range(0,10) ) = 0.5
_FresnelTint("_FresnelTint", Color) = (0.5,0.5,0.5,1)

	}
	
	SubShader 
	{
		Tags
		{
"Queue"="Geometry"
"IgnoreProjector"="False"
"RenderType"="Opaque"

		}

		
Cull Back
ZWrite On
ZTest LEqual
ColorMask RGBA
Fog{
}


		CGPROGRAM
#pragma surface surf BlinnPhongEditor  vertex:vert
#pragma target 3.0


sampler2D _Diffuse;
sampler2D _Normals;
sampler2D _Specular;
samplerCUBE _Reflection;
float _Gloss;
float4 _Colour;
float _ReflectionStrength;
float4 _SpecColour;
float _Fresnel;
float _FresnelStrength;
float4 _FresnelTint;

			struct EditorSurfaceOutput {
				half3 Albedo;
				half3 Normal;
				half3 Emission;
				half3 Gloss;
				half Specular;
				half Alpha;
				half4 Custom;
			};
			
			inline half4 LightingBlinnPhongEditor_PrePass (EditorSurfaceOutput s, half4 light)
			{
half3 spec = light.a * s.Gloss;
half4 c;
c.rgb = (s.Albedo * light.rgb + light.rgb * spec);
c.a = s.Alpha;
return c;

			}

			inline half4 LightingBlinnPhongEditor (EditorSurfaceOutput s, half3 lightDir, half3 viewDir, half atten)
			{
				half3 h = normalize (lightDir + viewDir);
				
				half diff = max (0, dot ( lightDir, s.Normal ));
				
				float nh = max (0, dot (s.Normal, h));
				float spec = pow (nh, s.Specular*128.0);
				
				half4 res;
				res.rgb = _LightColor0.rgb * diff;
				res.w = spec * Luminance (_LightColor0.rgb);
				res *= atten * 2.0;

				return LightingBlinnPhongEditor_PrePass( s, res );
			}
			
			struct Input {
				float2 uv_Diffuse;
float2 uv_Normals;
float2 uv_Specular;
float3 viewDir;

			};

			void vert (inout appdata_full v, out Input o) {
float4 VertexOutputMaster0_0_NoInput = float4(0,0,0,0);
float4 VertexOutputMaster0_1_NoInput = float4(0,0,0,0);
float4 VertexOutputMaster0_2_NoInput = float4(0,0,0,0);
float4 VertexOutputMaster0_3_NoInput = float4(0,0,0,0);


			}
			

			void surf (Input IN, inout EditorSurfaceOutput o) {
				o.Normal = float3(0.0,0.0,1.0);
				o.Alpha = 1.0;
				o.Albedo = 0.0;
				o.Emission = 0.0;
				o.Gloss = 0.0;
				o.Specular = 0.0;
				o.Custom = 0.0;
				
float4 Tex2D0=tex2D(_Diffuse,(IN.uv_Diffuse.xyxy).xy);
float4 Multiply2=_Colour * Tex2D0;
float4 Tex2DNormal0=float4(UnpackNormal( tex2D(_Normals,(IN.uv_Normals.xyxy).xy)).xyz, 1.0 );
float4 Tex2D1=tex2D(_Specular,(IN.uv_Specular.xyxy).xy);
float4 TexCUBE0=texCUBE(_Reflection,float4( IN.viewDir.x, IN.viewDir.y,IN.viewDir.z,1.0 ));
float4 Multiply0=Tex2D1 * TexCUBE0;
float4 Multiply4=Multiply0 * _ReflectionStrength.xxxx;
float4 Fresnel0=(1.0 - dot( normalize( float4( IN.viewDir.x, IN.viewDir.y,IN.viewDir.z,1.0 ).xyz), normalize( Tex2DNormal0.xyz ) )).xxxx;
float4 Pow0=pow(Fresnel0,_Fresnel.xxxx);
float4 Multiply5=Pow0 * _FresnelStrength.xxxx;
float4 Multiply6=Multiply5 * _FresnelTint;
float4 Multiply1=TexCUBE0 * Multiply6;
float4 Add0=Multiply4 + Multiply1;
float4 Multiply3=_SpecColour * Tex2D1;
float4 Master0_5_NoInput = float4(1,1,1,1);
float4 Master0_7_NoInput = float4(0,0,0,0);
float4 Master0_6_NoInput = float4(1,1,1,1);
o.Albedo = Multiply2;
o.Normal = Tex2DNormal0;
o.Emission = Add0;
o.Specular = _Gloss.xxxx;
o.Gloss = Multiply3;

				o.Normal = normalize(o.Normal);
			}
		ENDCG
	}
	Fallback "Diffuse"
}